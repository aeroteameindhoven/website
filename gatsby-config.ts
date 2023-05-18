import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
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

    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://aeroteameindhoven.nl/graphql",
    //   },
    // },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WN8X4H8WCY"
      }
    },
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
        path: `${__dirname}/src/images/members`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
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
