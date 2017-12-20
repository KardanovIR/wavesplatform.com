export default breakpoints => ({
  atMedia: size =>
    `@media (min-width: ${
      typeof size === 'number' ? size : breakpoints[size]
    }px)`,
});
