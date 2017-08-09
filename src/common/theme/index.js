export { default as typeface } from './typeface';


import palette from './palette';
import createTypography from './typography';
import breakpoints from './breakpoints';
import spacing from './spacing';
import mixins from './mixins';
import transitions from './transitions';


const theme = {
    palette,
    typography: createTypography({ spacingUnit: spacing.unit }),
    breakpoints,
    spacing,
    mixins,
    transitions
}

export default theme;