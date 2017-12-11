import colorMigrationProxy from './utils/colorMigrationProxy';
import hexToRgba from './utils/hexToRgba';
import createColorGetter from './utils/createColorGetter';
import lightenDarkenColor from './utils/lightenDarkenColor';

// palette
export const blue = {
  0: 'white',
  50: '#F3F5FA',
  100: '#D6E0FC',
  300: '#6BA6FF',
  500: '#0056FF',
  700: '#263f6f',
  900: '#0a1b43',
};

// 300, 500, 700
export const gray = colorMigrationProxy(
  {
    0: '#fff',
    50: '#fafafa',
    100: '#ebecf0',
    // 200: '#d8dbed',  // moved to grayBlue
    // 300: '#9cb4e1',  // moved to grayBlue
    400: '#AEAEAE',
    500: '#979797',
    600: '#656565',
    700: '#444444',
    800: '#2d374b',
    1000: '#161616',
  },
  'gray'
);

export const grayBlue = colorMigrationProxy(
  {
    200: '#d8dbed',
    300: '#9cb4e1',
    400: '#8292b6', // new
    500: '#5F7090',
    600: '#4d5d7e', // new
    700: '#415272',
  },
  'grayBlue'
);

export const orange = {
  300: '#FCBC32',
};

// product colors
export const primary = blue;

export const secondary = {
  500: '#ea9019',
};

export const success = {
  500: '#22d64c',
};

export const danger = {
  500: orange[300],
};

const palette = {
  primary,
  secondary,
  success,
  danger,
  blue,
  gray,
  grayBlue,
  orange,

  // color helper functions
  lighten: lightenDarkenColor,
  darken: (v, amt) => lightenDarkenColor(v, -amt),
  opaque: hexToRgba,
};
palette.getColor = createColorGetter(palette);

export { palette };
export default palette;
