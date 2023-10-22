// This file is needed for projects that have `moduleResolution` set to `node`
// in their tsconfig.json to be able to `import {} from 'next-usequerystate/debug'`.
// Other module resolutions strategies will look for the `exports` in `package.json`,
// but with `node`, TypeScript will look for a .d.ts file with that name at the
// root of the package.

export * from './dist/debug'
