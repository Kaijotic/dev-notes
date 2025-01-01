export const description =
  'The notes from my journey in learning software development.';

const isProduction = process.env.NODE_ENV === 'production';
export const assetPrefix = isProduction ? '/dev-notes' : '';
