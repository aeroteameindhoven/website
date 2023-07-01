import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import type { AstroIntegration, DataEntryType, HookParameters } from "astro";
import { defineConfig } from "astro/config";
import { csvParse } from "d3-dsv";

// https://astro.build/config
export default defineConfig({
  site: "https://aeroteameindhoven.nl",
  output: "static",
  compressHTML: true,
  experimental: {
    assets: true,
  },
  integrations: [prefetch(), sitemap(), csv_content()],
});

interface SetupHookParams extends HookParameters<"astro:config:setup"> {
  addDataEntryType: (dataEntryType: DataEntryType) => void;
}

function csv_content(): AstroIntegration {
  return {
    name: "csv-loader",
    hooks: {
      "astro:config:setup": (params) => {
        const { addDataEntryType } = params as SetupHookParams;

        addDataEntryType({
          extensions: [".csv"],
          getEntryInfo: ({ contents }) => {
            return {
              data: { rows: csvParse(contents) },
              rawData: contents,
            };
          },
        });
      },
    },
  };
}
