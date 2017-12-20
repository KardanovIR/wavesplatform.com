import createBreakpoints from '../breakpoints';

const createStylesCombiner = breakpoints => (mobileStyles, desktopStyles) => ({
  ...mobileStyles,
  [`@media (min-width: ${breakpoints.md}px)`]: {
    ...desktopStyles,
  },
});

export const combineMobileDesktopStyles = createStylesCombiner(
  createBreakpoints()
);
