import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

const MEMBERS_QUERY = graphql`
  query Members {
    photos: allFile(filter: { sourceInstanceName: { eq: "team-photos" } }) {
      group(field: { relativeDirectory: SELECT }) {
        year: fieldValue
        files: nodes {
          path: base
          childImageSharp {
            gatsbyImageData(width: 330)
          }
        }
      }
    }
    teams: allFile(filter: { sourceInstanceName: { eq: "teams" } }) {
      nodes {
        data: childJson {
          year
          description
          members {
            first_name
            last_name
            function
            subteams
            email
            photo
            study
            study_level
            linkedin
            time_commitment
          }
        }
      }
    }
  }
`;

export type Years = `${number}-${number}`;
export function isYears(years: unknown): years is Years {
  return typeof years === "string" && /[0-9]{2}-[0-9]{2}/.test(years);
}

export function useTeamMembers(team: Years): TeamMember[] | undefined {
  const query = useStaticQuery<Queries.MembersQuery>(MEMBERS_QUERY);

  const all_members = joinQuery(query);

  return all_members.get(team)?.sort((a, b) => {
    const a_has_photo = a.photo !== undefined;
    const b_has_photo = b.photo !== undefined;

    // Sort members with photos first
    if (a_has_photo && !b_has_photo) {
      return -1;
    } else if (b_has_photo && !a_has_photo) {
      return 1;
    } else {
      return 0;
    }
  });
}

/**
 * Join the member info data with the member's profile photo
 *
 * @param query The result from the graqhql query
 * @returns The merged member info
 */
function joinQuery(query: Queries.MembersQuery): Map<Years, TeamMember[]> {
  let photosMap = new Map<`${Years}|${string}`, IGatsbyImageData | undefined>();
  for (let yearGroup of query.photos.group) {
    if (!isYears(yearGroup.year)) {
      throw new TypeError(`Year grouping is invalid: ${yearGroup.year}`);
    }

    for (let photo of yearGroup.files) {
      photosMap.set(`${yearGroup.year}|${photo.path}`, photo.childImageSharp?.gatsbyImageData);
    }
  }

  let membersMap = new Map<Years, TeamMember[]>();
  for (let membersNode of query.teams.nodes) {
    if (membersNode.data === null) throw new TypeError("No JSON data received from query");

    if (!isYears(membersNode.data.year)) throw new TypeError(`Year grouping is invalid: ${membersNode.data.year}`);
    const year = membersNode.data.year;

    membersMap.set(
      year,
      (membersNode.data.members || []).map((member) => {
        if (member === null) throw new TypeError("Member is null");

        const photo_path = member?.photo ?? undefined;

        const photo = photo_path === undefined ? undefined : photosMap.get(`${year}|${photo_path}`);

        return new TeamMember(member, photo);
      })
    );
  }

  return membersMap;
}

export class TeamMember {
  public first_name: string;
  public last_name: string;

  public email: string;

  public title?: string;
  public subteams: string[];

  // New fields for team 22-23
  public study?: string;
  public linkedin?: string;

  public photo?: IGatsbyImageData;

  public constructor(query_info: Queries.jsonMembers, photo: IGatsbyImageData | undefined) {
    if (query_info.first_name === null) throw new TypeError("Member has no first name");
    this.first_name = query_info.first_name;
    if (query_info.last_name === null) throw new TypeError("Member has no last name");
    this.last_name = query_info.last_name;

    if (query_info.email === null) throw new TypeError("Member has no email");
    this.email = query_info.email;

    this.title = query_info.function ?? undefined;

    if (query_info.subteams === null) {
      this.subteams = [];
    } else {
      this.subteams = query_info.subteams.map((subteam) => {
        if (subteam === null) throw new TypeError("null subteam in list");

        return subteam;
      });
    }

    // Convert empty string to undefined
    this.study = query_info.study ?? undefined;
    this.linkedin = query_info.linkedin ?? undefined;

    this.photo = photo;
  }

  public fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  public linkedInLink() {
    return `https://www.linkedin.com/in/${this.linkedin}/`;
  }
}
