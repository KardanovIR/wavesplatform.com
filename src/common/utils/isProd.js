export default () =>
  process.env.NODE_ENV === 'production' ||
  process.env.TEST_ENV === 'production';
