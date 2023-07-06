// @ts-check

// @ts-expect-error - no types
import organizeImports from 'prettier-plugin-organize-imports'

/**
 * @type {import("prettier").Config}
 */
export default {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [organizeImports],
}
