# micro

small utils/standard library for Typescript

### usage
if you want to don't want to use Typescript, use the `./dist/` folder, otherwise, use the `./src/` folder.
- `micro.mod.ts` is the main module which consists of curated libraries and tools.
- `microsys.mod.ts` is a wrapper module for all of micro which gives access to every exported function. Use with caution.

### security
certain libraries may be considered insecure, warnings for these libraries are there for your safety and mine, they are contained in micro because it can be used as a simple lightweight development tool, which is the intended purpose of micro, nothing within this library should be used for production.

### tests
the only library that currently contains tests is `tester`, which uses itself, some tests are likely to have been repeated due to copy-pasting for most of the tests, but there is roughly 100 non repeated tests. In total it successfully completes all 210 tests.
- You can run tests via `npm run test`

### libraries
- tester (simple test framework)
- logger (static logger util)
- fsprovider (filesystem wrapper)
- buildsystem (react lite)
- server (simple http api server)
    - requires `micro.unsafe.ts`
    - this library is considered unsafe / insecure and has not been tested for vulnerabilities, use at your own risk.