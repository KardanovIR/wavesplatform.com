import capitalizeFirstLetter from 'src/common/utils/capitalizeFirstLetter';

const directions = ['top', 'bottom'];

const createClassesForSide = theme => side => ({
    [`padding-${side}-1`]: {
        [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 5,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 6,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 8,
        },
    },

    // section narrow
    [`padding-${side}-2`]: {
        [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 6,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 7,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 8,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 10,
        },
    },
    
    // section
    [`padding-${side}-3`]: {
        [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 10,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 12,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 14,
        },
    },

    // section wide
    [`padding-${side}-4`]: {
        [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 9,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 11,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 15,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalizeFirstLetter(side)}`]: theme.spacing.unit * 20,
        },
    },

    // [`padding-${side}-5`]: { },
})



export default theme => {
    const stylesCreator = createClassesForSide(theme);
    let styles = {};

    directions.forEach(side => styles = {
        ...styles,
        ...stylesCreator(side),
    });

    return styles;
}