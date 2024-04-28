# Team SMP Website _(again)_

![Built with Astro badge](https://github.com/Team-SMP/teamsmp-web-again/blob/dffabe3cdd15cfaefd1fad6168dbba161be936ea/public/astro_cozy_vector_badge.svg)

This is the [new version of the Team SMP Website](https://teamsmp-new.vercel.app), completely rebuilt from the ground up using [Astro](https://astro.build).

## Useful for Collaborators

All commands are run from the root of the project, from a terminal, for example, using the VS Code integrated terminal, when opened from the workspace file. Some commonly used commands are listed in [the table below](#commands).

Some commands are also available as VS Code tasks, executable by opening the command pallete (`CTRL+SHIFT+P`) and searching for "`run task`". Find the one named "`Tasks: Run Task`" and press `ENTER`. Then, choose a task from the list, and it will run.

When first opening the workspace, a notification will appear in VS Code asking you to download recommended extensions, adding [Astro language support](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [comment categorisation](https://marketplace.visualstudio.com/items?itemName=Tion.evenbettercomments) and [enhanced Git control](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) to name a few. We recommend that you download theese extensions when asked, as they will help massively with coding for the website.

We are using [pnpm](https://pnpm.io) for package management, as it is fast and space-efficient. This, of course, requires you to have both [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed - if you don't, none of this will work. [Download Node](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation).

When making any changes to the new website, ensure to use the [pre Git branch](https://github.com/Team-SMP/teamsmp-web-again/tree/pre) and [open a Pull Request](https://github.com/Team-SMP/teamsmp-web-again/compare/pre?expand=1) between the two branches. This is done to ensure that the production deployment doesn't become incomplete and/or buggy.

For code consistency, we recommend formatting the files with [Prettier](https://prettier.io/) using the VS Code task or `pnpm prettier . --write`.

### Commands

| Command                    | Action                                                           |
| :------------------------- | :--------------------------------------------------------------- |
| `pnpm i`                   | Installs dependencies                                            |
| `pnpm run dev`             | Starts a dev server at `localhost:4321` (VS Code task available) |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check`                 |
| `pnpm run astro -- --help` | Get help using the Astro CLI                                     |
| `pnpm prettier . --write`  | Format with Prettier (VS Code task available)                    |

If you need any help with Astro, check out [their documentation](https://docs.astro.build).
