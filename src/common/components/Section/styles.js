const directions = ['top', 'bottom'];


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const createClassesForSide = theme => side => ({
    // [`padding-${side}-1`]: { },

    // section narrow
    [`padding-${side}-2`]: {
        [`padding${capitalize(side)}`]: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 4,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 6,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 10,
        },
    },
    
    // section
    [`padding-${side}-3`]: {
        [`padding${capitalize(side)}`]: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 10,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 12,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 14,
        },
    },

    // section wide
    [`padding-${side}-4`]: {
        [`padding${capitalize(side)}`]: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 11,
        },
        [theme.breakpoints.up('md')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 15,
        },
        [theme.breakpoints.up('lg')]: {
            [`padding${capitalize(side)}`]: theme.spacing.unit * 20,
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