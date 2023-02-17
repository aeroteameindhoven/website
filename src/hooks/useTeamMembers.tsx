import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

const QUERY = graphql`
  query Members {
    allMembers {
      nodes {
        members {
          first_name
          surname
          function
          subteam
          aero_email
          time
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
  surname: string;
  aero_email: string;
  function: string;
  subteam: string;
  time: "part-time" | "full-time";
}

interface MemberPhotoFile extends FileNode {
  name: string;
}

export type Years = `${number}-${number}`;

export function useTeamMembers(team: Years): TeamMember[] | undefined {
  const query = useStaticQuery<QueryResult>(QUERY);

  const all_members = joinQuery(query);

  return all_members.get(team);
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
  return (member.first_name + member.surname).replace(/\s/g, "").toLowerCase();
}

export class TeamMember {
  public first_name: string;
  public surname: string;

  public email: string;

  public title: string;
  public subteams: string[];

  public time: "part-time" | "full-time";

  // New fields for 22-23
  // TODO: linkedin?: string

  public photo?: IGatsbyImageData;

  public constructor(csv_info: MemberCSVInfo, photo: IGatsbyImageData | undefined) {
    this.first_name = csv_info.first_name;
    this.surname = csv_info.surname;

    this.email = csv_info.aero_email;

    this.title = csv_info.function;
    this.subteams = csv_info.subteam
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0);

    this.time = csv_info.time;

    this.photo = photo;
  }

  public fullName() {
    return this.first_name + " " + this.surname;
  }
}
