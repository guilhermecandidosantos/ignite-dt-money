import config from '@rocketseat/eslint-config/react.mjs'

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'always' },
      ],
      '@stylistic/max-len': ['error', { code: 100, ignoreComments: true }],
    },
  },
]