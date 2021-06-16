# Lerna monorepo example

This is an example monorepo that uses lerna. There are two packages in the repo: `workspace-a`, and `workspace-b`. Both packages start HTTP servers using `yarn serve`, each returning different responses.

1. Start at the repo root
1. Run `yarn install` to install all dependencies
    * Note that `package.json` contains a `postinstall` script that runs `lerna bootstrap`.
    * This instruct yarn to run `lerna bootstrap` after `yarn install` has finished. This allows lerna to install any required dependencies and also link the `workspace-a` and `workspace-b` packages. By doing this as part of the install step, App Platform can cache the dependencies installed by lerna.
    * Important: if you do not configure a similar `postinstall` command, you will need to manually run `lerna bootstrap`.
1. Change into either workspace directory:
    * `cd packages/workspace-a`; or
    * `cd packages/workspace-b`
1. Run the example build command: `yarn build`
1. Start the server: `yarn serve`
