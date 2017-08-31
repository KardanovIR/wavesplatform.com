// directly imported objects
import palette from './palette';
import transitions from './transitions';

// factory functions
import createBreakpoints from './breakpoints';
import createMixins from './mixins';
import createTypography from './typography';
import createSpacing from './spacing';


// create theme fields
const breakpoints = createBreakpoints();
const spacing = createSpacing(breakpoints);
const typography = createTypography(palette, breakpoints);
const mixins = createMixins(breakpoints);



export default {
    palette,
    breakpoints,
    typography,
    spacing,
    mixins,
    transitions,
};