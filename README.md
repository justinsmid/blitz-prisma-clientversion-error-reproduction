# Blitz + prisma clientVersion error reproduction

## Steps to reproduce error

First, run the app:

```sh
pnpm install
pnpx prisma generate
pnpm run dev
```

Then go to http://localhost:3000, and you should see the following error in the server console:

```
Error while processing the request
TypeError: Cannot destructure property 'clientVersion' of 'undefined' as it is undefined.
    at new PrismaClientValidationError ({dirName}/node_modules/.pnpm/@prisma+client@5.0.0_prisma@5.0.0/node_modules/@prisma/client/runtime/library.js:26:2545)
    at Logger._cloneError ({dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/BaseLogger.js:238:26)
    at Logger._recursiveCloneAndMaskValuesOfKeys ({dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/BaseLogger.js:183:41)
    at {dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/BaseLogger.js:157:25
    at Array.map (<anonymous>)
    at Logger._mask ({dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/BaseLogger.js:156:22)
    at Logger.log ({dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/BaseLogger.js:99:24)
    at Logger.error ({dirName}/node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/cjs/index.js:29:22)
    at {dirName}/node_modules/.pnpm/@blitzjs+rpc@2.0.0-beta.31_@tanstack+query-core@4.24.4_blitz@2.0.0-beta.31_next@13.4.5_react-dom@18.2.0_react@18.2.0/node_modules/@blitzjs/rpc/dist/index-server.cjs:326:15
    at Generator.throw (<anonymous>)
    at rejected ({dirName}/node_modules/.pnpm/@blitzjs+rpc@2.0.0-beta.31_@tanstack+query-core@4.24.4_blitz@2.0.0-beta.31_next@13.4.5_react-dom@18.2.0_react@18.2.0/node_modules/@blitzjs/rpc/dist/index-server.cjs:127:29)

```
