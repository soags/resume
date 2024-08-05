import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "職務経歴書",
			defaultLocale: "ja",
      customCss: ["./src/globals.css"],
      social: {
        github: "https://github.com/soags",
      },		
      sidebar: [
        {
          label: "soags",
          items: [
            {
              label: "職務経歴書",
              slug: "index",
            },
          ],
        },
      ],
			pagefind: false,			
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
