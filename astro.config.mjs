import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://soags.github.io",
  base: "/resume",
  integrations: [
    starlight({
      title: "職務経歴書",
      defaultLocale: "ja",
      customCss: [
        "@fontsource/noto-sans-jp/400.css",
        "@fontsource/noto-sans-jp/500.css",
        "@fontsource/noto-sans-jp/600.css",
        "@fontsource/noto-sans-jp/700.css",
        "./src/globals.css",
      ],
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
