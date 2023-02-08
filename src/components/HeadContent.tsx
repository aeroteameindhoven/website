import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}

interface MetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export function HeadContent(props: React.PropsWithChildren<Props>) {
  const meta = useStaticQuery<MetadataQuery>(graphql`
    query MetadataQuery {
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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#002878" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content={props.description || meta.site.siteMetadata.description} />
      <meta name="msapplication-TileColor" content="#002878" />
      <meta name="theme-color" content="#ffffff" />
      {props.title ? (
        <title>
          {props.title} | {meta.site.siteMetadata.title}
        </title>
      ) : (
        <title>{meta.site.siteMetadata.title}</title>
      )}
      {props.children}
    </>
  );
}
