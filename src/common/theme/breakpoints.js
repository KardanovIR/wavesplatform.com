// Sorted ASC by size. That's important.
export const keys = ['xs', 'sm', 'md', 'lg', 'desktop1366', 'xl'];

const defaultBreakpoints = {
  xs: 360,
  sm: 600,
  tablet: 768,
  md: 980,
  lg: 1280,
  desktop1366: 1366,
  xl: 1920,
};

export const query = Object.keys(defaultBreakpoints).reduce((acc, label) => {
  acc[label] = `(min-width: ${defaultBreakpoints[label] / 16}em)`;
  return acc;
}, {});

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(
  breakpoints = defaultBreakpoints,
  unit = 'px',
  step = 1
) {
  const values = keys.map(key => breakpoints[key]);

  function up(key) {
    let value;
    // min-width of xs starts at 0
    if (key === 'xs') {
      value = 0;
    } else {
      value = breakpoints[key] || key;
    }
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = breakpoints[key] || key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const startIndex = keys.indexOf(start);
    const endIndex = keys.indexOf(end);
    return (
      `@media (min-width:${values[startIndex]}${unit}) and ` +
      `(max-width:${values[endIndex + 1] - step / 100}${unit})`
    );
  }

  function only(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === keys.length - 1) {
      return up(key);
    }
    return between(key, key);
  }

  // function getWidth(key) {
  //     return breakpoints[key];
  // }

  return {
    keys,
    ...breakpoints,
    up,
    down,
    between,
    only,
    // getWidth,
  };
}

export default createBreakpoints;
