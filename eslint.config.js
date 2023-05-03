// @ts-check

import path from 'path'
import { fileURLToPath } from 'url'

// @ts-expect-error
import { FlatCompat } from '@eslint/eslintrc'
import { gitignoreToMinimatch } from '@humanwhocodes/gitignore-to-minimatch'
import prettier from 'eslint-config-prettier'
import { readGitignoreFiles } from 'eslint-gitignore'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const eslintConfig = [
  {
    ignores: readGitignoreFiles({ cwd: __dirname }).map(gitignoreToMinimatch),
  },
  ...compat.extends('next/core-web-vitals'),
  {
    rules: prettier.rules,
  },
]

export default eslintConfig
