import { error } from "@sveltejs/kit";
import PapaParse from "papaparse";
import z from "zod";
import type { EntryGenerator, PageServerLoad } from "./$types";

// TODO: encapsulate, and allow other files to get the list of teams? (from export entry?)
const teams = import.meta.glob("/src/members/*.csv", { eager: true, as: "raw" });

function filename(path: string): string {
  return path.split("/").pop()!.replace(/.csv$/, "");
}

// Schema-validated member type
const Member = z
  .object({
    first_name: z.string().trim(),
    last_name: z.string().trim(),
    function: z.string().trim(),
    subteams: z
      .string()
      .optional()
      .transform(
        (teams) => (teams === undefined ? [] : teams.split(",").map((team) => team.trim())) // split by ","
      ),
    email: z.string().email(),

    // Added in 22-23
    study: z.string().optional(),
    linkedin: z.string().optional(),

    // Added in 23-24
    study_level: z.string().optional(),
    // Retired in 23-24
    time: z.enum(["full-time", "part-time"]).optional()
  })
  .strict()
  .readonly();
export type Member = z.infer<typeof Member>;

export const load: PageServerLoad = ({ params }) => {
  const file_name = `/src/members/${params.year}.csv`;
  const team_csv = teams[file_name];

  if (team_csv !== undefined) {
    const csv = PapaParse.parse<unknown>(team_csv, { header: true });

    // FIXME: do something with these errors?
    console.error(csv.errors);

    const members = csv.data.map<Member>((member) => {
      const result = Member.safeParse(member);

      if (result.success) {
        return result.data;
      } else {
        throw new Error(`Failed to parse ${file_name}: ${result.error.message}`);
      }
    });

    return {
      year: params.year,
      team_csv,
      file_name,
      members,
      // FIXME: MERGE with entries(somehow)
      entries: Object.keys(teams).map((file_path) => ({
        year: filename(file_path)
      }))
    };
  }

  throw error(404, "Page not found");
};

export const entries: EntryGenerator = () => {
  return Object.keys(teams).map((file_path) => ({
    year: filename(file_path)
  }));
};
