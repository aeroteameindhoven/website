import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: {
    generateOnBuild: true
  },
  pathPrefix: process.env["PATH_PREFIX"],
  siteMetadata: {
    title: `Aero Team Eindhoven`,
    siteUrl: `https://aeroteameindhoven.nl`,
    description:
      "Redefine Flying! Aero Team Eindhoven is a team of students from Eindhoven University of Technology working towards a sustainable world by developing an autonomous drone network for zero-emission air delivery."
  },
  plugins: [
    /** BEGIN Image optimization */
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {
            width: 40
          },
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },
    /** END Image optimization */

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId:
          process.env["STAGING"] === "true"
            ? "80cd5ceb-3499-4f35-b7ed-e5f5065e67f2" // staging
            : "36fb18bc-3525-49a2-bed9-7bd1fcd372a4", // production
        server: "https://insights.aeroteameindhoven.nl",
        ignoreLocalhost: true,
        ignoreOwnVisits: true,
        detailed: true
      }
    },
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-umami/
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId:
          process.env["STAGING"] === "true"
            ? "18e240ca-d978-4890-ba33-7a2851a5117c" // Staging
            : "ba37d9c7-eb50-4d46-a038-448ec0ec9e44", // Production
        srcUrl: "https://umami.aeroteameindhoven.nl/script.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
        dataCache: true
      }
    },

    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://aeroteameindhoven.nl/graphql",
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        lang: "en",

        name: "Aero Team Eindhoven",
        short_name: "Aero Team",

        start_url: "/",

        theme_color: "#021e3a",
        background_color: "#051320",

        display: "standalone",
        icon: `${__dirname}/src/images/site-icon.png`
      }
    },

    // BEGIN member list
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "member-images",
        path: `${__dirname}/content/images/members`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team-members`,
        path: `${__dirname}/content/members/`
      }
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        typeName: "members",
        nodePerFile: "members"
      }
    },
    // END member list

    // BEGIN sponsor list
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsors`,
        path: `${__dirname}/content/sponsors`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsors-images`,
        path: `${__dirname}/content/images/sponsors`
      }
    },
    // END sponsor list

    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    }
  ]
};

export default config;
