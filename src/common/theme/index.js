export { default as typeface } from './typeface';


import palette from './palette';
import breakpoints from './breakpoints';
import mixins from './mixins';
import transitions from './transitions';

import createTypography from './typography';
import createSpacing from './spacing';



const spacing = createSpacing();


const theme = {
    palette,
    typography: createTypography(palette),
    breakpoints,
    spacing,
    mixins,
    transitions
}

export default theme;