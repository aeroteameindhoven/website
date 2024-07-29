import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

const QUERY = graphql`
  query Projects {
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        slug: name
        markdown: childMarkdownRemark {
          meta: frontmatter {
            name
            images
            academic_year
            blurb
            model
            stats {
              label
              value
            }
          }
          html
        }
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    models: allFile(filter: { sourceInstanceName: { eq: "project-models" } }) {
      nodes {
        relativePath
        publicURL
      }
    }
  }
`;

export interface Project {
  name: string;
  images: IGatsbyImageData[];
  academic_year: number;
  html: string;
  blurb: string;
  slug: string;
  model?: string;
  stats?: Statistic[];
}

export interface Statistic {
  label: string;
  value: string;
}

export function useProjects(): Project[] {
  const query = useStaticQuery<Queries.ProjectsQuery>(QUERY);

  const all_images = new Map(
    query.images.nodes.map((image) => [image.relativePath, image.childImageSharp!.gatsbyImageData!])
  );

  const all_models = new Map(query.models.nodes.map((image) => [image.relativePath, image.publicURL]));

  return query.projects.nodes.map((project): Project => {
    const initial_images = project?.markdown?.meta?.images ?? [];
    const images = initial_images
      .map((image_path) => all_images.get(image_path?.replace(/^\//, "") ?? ""))
      .filter<IGatsbyImageData>((image): image is IGatsbyImageData => image !== undefined);

    const model = all_models.get(project?.markdown?.meta?.model?.replace(/^\//, "") ?? "") ?? undefined;

    return {
      html: project?.markdown?.html ?? "",
      name: project?.markdown?.meta?.name ?? "",
      academic_year: project?.markdown?.meta?.academic_year ?? 0,
      images: images,
      blurb: project?.markdown?.meta?.blurb ?? "",
      slug: project.slug,
      model,
      stats: (() => {
        const stats = project.markdown?.meta?.stats ?? undefined;
        if (stats === undefined) return undefined;

        return stats.filter((stat): stat is Statistic => {
          if (stat === null) throw TypeError("empty statistic");
          if (stat.label === null) throw TypeError("statistic missing field label");
          if (stat.value === null) throw TypeError("statistic missing field value");

          return true;
        });
      })()
    };
  });
}
