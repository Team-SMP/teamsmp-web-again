import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://teamsmp-new.vercel.app",
	output: "hybrid",
	integrations: [vue()],
	adapter: vercel(),
});
