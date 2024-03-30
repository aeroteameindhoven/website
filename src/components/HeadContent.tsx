import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}

export function HeadContent(props: Props) {
  const meta = useStaticQuery<Queries.MetadataQuery>(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#002878" />
      <meta name="description" content={props.description || (meta.site?.siteMetadata?.description ?? undefined)} />
      {props.title ? (
        <title>
          {props.title} | {meta.site?.siteMetadata?.title}
        </title>
      ) : (
        <title>{meta.site?.siteMetadata?.title}</title>
      )}
    </>
  );
}
