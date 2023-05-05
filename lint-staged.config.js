// @ts-check

// import eslintUnsafePkg from 'eslint/use-at-your-own-risk'

/**
 * @type {(files: string[]) => Promise<string>}
 */
// const removeESLintIgnoredFiles = async (files) => {
//   // @ts-expect-error
//   const eslint = new eslintUnsafePkg.FlatESLint()
//   const isIgnored = await Promise.all(
//     files.map((file) => {
//       return eslint.isPathIgnored(file)
//     }),
//   )
//   const filteredFiles = files.filter((_, i) => !isIgnored[i])
//   return filteredFiles.join(' ')
// }

/**
 * @type {import("lint-staged").Config}
 */
const lintStagedConfig = {
  '.*{ignore,ignore-sync}': () => 'npm run ignore-sync',
  '*': async (files) => {
    const filenames = files.join(' ')
    return [
      // don't use max-warnings because ignored files are counted
      // eslint-next-config seems not supporting flat config
      `npx eslint --fix ${filenames}`,
      `npx prettier --ignore-unknown --write ${filenames}`,
    ]
  },
  './eslint.config.js': () => 'npm run format:eslint',
  './{prettier.config.js,.prettierignore}': () => 'npm run format:prettier',
}

export default lintStagedConfig
