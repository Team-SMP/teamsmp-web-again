import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://teamsmp-new.vercel.app',
  output: 'hybrid',
  integrations: [vue()]
});