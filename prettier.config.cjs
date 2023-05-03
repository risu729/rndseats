// @ts-check

// @ts-expect-error
const organizeImports = require('prettier-plugin-organize-imports')

/**
 * @type {import("prettier").Config}
 */
module.exports = {
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [organizeImports],
}
