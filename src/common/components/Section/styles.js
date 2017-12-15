import capitalizeFirstLetter from 'src/common/utils/capitalizeFirstLetter';

const directions = ['top', 'bottom'];

const genPaddingResponsive = (side, theme, [xs, sm, md, lg]) => ({
  [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * xs,
  [theme.breakpoints.up('sm')]: {
    [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * sm,
  },
  [theme.breakpoints.up('md')]: {
    [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * md,
  },
  [theme.breakpoints.up('lg')]: {
    [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * lg,
  },
});

const createClassesForSide = theme => side => ({
  [`padding-${side}-1`]: genPaddingResponsive(side, theme, [4, 5, 6]),
  [`padding-${side}-2`]: genPaddingResponsive(side, theme, [6, 7, 8, 10]),
  [`padding-${side}-3`]: genPaddingResponsive(side, theme, [8, 10, 12, 14]),
  [`padding-${side}-4`]: genPaddingResponsive(side, theme, [10, 13, 16, 18]),
  [`padding-${side}-5`]: genPaddingResponsive(side, theme, [10, 28, 32, 34]),
});

export default theme => {
  const stylesCreator = createClassesForSide(theme);
  let styles = {};

  directions.forEach(
    side =>
      (styles = {
        ...styles,
        ...stylesCreator(side),
      })
  );

  return styles;
};
