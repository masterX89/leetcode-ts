import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
  },
  {
    files: ['**/*.cjs'],
    rules: {
      'no-console': 'off',
    },
  },
)
