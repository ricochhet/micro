# micro

small utils/standard library for Typescript

### usage
if you want to don't want to use Typescript, use the `./dist/` folder, otherwise, use the `./src/` folder.
- `micro.mod.ts` is the main module which consists of curated libraries and tools.
- `microsys.mod.ts` is a wrapper module for all of micro which gives access to every exported function. Use with caution.

### libraries
- tester (simple test framework)
- logger (static logger util)
- fsprovider (filesystem wrapper)
- buildsystem (react lite)