const directions = ['top', 'right', 'bottom', 'left'];


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const createClassesForSide = theme => side => ({
    [`margin-${side}-1`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 0.5
    },
    [`margin-${side}-2`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 1
    },
    [`margin-${side}-3`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 2
    },
    [`margin-${side}-4`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 4
    },

    [theme.mixins.atMedia('md')]: {
        [`margin-${side}-1`]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 1
        },
        [`margin-${side}-2`]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 2
        },
        [`margin-${side}-3`]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 4
        },
        [`margin-${side}-4`]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 6
        },
    }
})



export default theme => {
    const stylesCreator = createClassesForSide(theme);
    let styles = {};

    directions.forEach(side => styles = {
        ...styles,
        ...stylesCreator(side),
        'inline-block': {
            display: 'inline-block'
        }
    });

    return styles;
}