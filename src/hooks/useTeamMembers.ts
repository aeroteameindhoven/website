import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

const QUERY = graphql`
  query Members {
    allMembers {
      nodes {
        members {
          first_name
          last_name
          function
          subteams
          email
          time
          study
          linkedin
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "member-images" } }) {
      group(field: { relativeDirectory: SELECT }) {
        fieldValue
        nodes {
          id
          name
          childImageSharp {
            # 330px is width of member image card
            gatsbyImageData(width: 330)
          }
        }
      }
    }
  }
`;

interface QueryResult {
  allMembers: {
    nodes: { members: MemberCSVInfo[]; parent: { name: Years } }[];
  };
  allFile: {
    group: { fieldValue: Years; nodes: MemberPhotoFile[] }[];
  };
}

export interface MemberCSVInfo {
  first_name: string;
  last_name: string;
  email: string;
  function: string;
  subteams: string;
  time: "part-time" | "full-time";

  // 22-23+ fields
  study?: string;
  linkedin?: string;
}

interface MemberPhotoFile extends FileNode {
  name: string;
}

export type Years = `${number}-${number}`;

export function useTeamMembers(team: Years): TeamMember[] | undefined {
  const query = useStaticQuery<QueryResult>(QUERY); // FIXME: use Queries.MembersQuery

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
 * Join the member info CSV data with the member's profile photo
 *
 * @param query The result from the graqhql query
 * @returns The merged member info
 */
function joinQuery(query: QueryResult): Map<Years, TeamMember[]> {
  let photosMap = new Map<Years, Map<string, IGatsbyImageData | undefined>>();
  for (let yearGroup of query.allFile.group) {
    let photoNameMapping = new Map<string, IGatsbyImageData | undefined>();

    for (let photo of yearGroup.nodes) {
      photoNameMapping.set(photo.name, photo.childImageSharp?.gatsbyImageData);
    }

    photosMap.set(yearGroup.fieldValue, photoNameMapping);
  }

  let membersMap = new Map<Years, TeamMember[]>();

  for (let membersNode of query.allMembers.nodes) {
    const year = membersNode.parent.name;

    let memberList = [];

    for (let member of membersNode.members) {
      memberList.push(new TeamMember(member, photosMap.get(year)?.get(getPictureFileName(member))));
    }

    membersMap.set(year, memberList);
  }

  return membersMap;
}

function getPictureFileName(member: MemberCSVInfo): string {
  return (member.first_name + member.last_name).replace(/\s/g, "").toLowerCase();
}

export class TeamMember {
  public first_name: string;
  public last_name: string;

  public email: string;

  public title: string;
  public subteams: string[];

  public time: "part-time" | "full-time";

  // New fields for team 22-23
  public study?: string;
  public linkedin?: string;

  public photo?: IGatsbyImageData;

  public constructor(csv_info: MemberCSVInfo, photo: IGatsbyImageData | undefined) {
    this.first_name = csv_info.first_name;
    this.last_name = csv_info.last_name;

    this.email = csv_info.email;

    this.title = csv_info.function;
    this.subteams = csv_info.subteams
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0);

    this.time = csv_info.time;

    // Convert empty string to undefined
    this.study = csv_info.study === "" || csv_info.study === null ? undefined : csv_info.study;
    this.linkedin = csv_info.linkedin === "" || csv_info.linkedin === null ? undefined : csv_info.linkedin;

    this.photo = photo;
  }

  public fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  public linkedInLink() {
    return `https://www.linkedin.com/in/${this.linkedin}/`;
  }
}
