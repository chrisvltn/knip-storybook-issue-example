/** @type {import('knip/dist/types/config').RawConfiguration} */
const config = {
  ignore: [],
  entry: [],
  exclude: [],
  ignoreDependencies: [],
  storybook: {
    config: ['components/storybook/{main,manager}.ts'],
    entry: [
      'components/storybook/preview.{js,jsx,ts,tsx}',
      'components/**/*.stories.{js,jsx,ts,tsx,mdx}',
    ],
    project: ['components/**/*.{js,jsx,ts,tsx}'],
  },
};

module.exports = config;
