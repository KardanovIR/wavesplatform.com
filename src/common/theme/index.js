// directly imported objects
import palette from './palette';
import transitions from './transitions';
import colors from './colors';

// factory functions
import createBreakpoints from './breakpoints';
import createMixins from './mixins';
import createTypography from './typography';
import createSpacing from './spacing';

// create theme fields
const breakpoints = createBreakpoints();
const spacing = createSpacing(breakpoints, { radius: 0 });
const typography = createTypography(palette, breakpoints, colors);
const mixins = createMixins(breakpoints);

export default {
  colors,
  palette,
  breakpoints,
  typography,
  spacing,
  mixins,
  transitions,
};
