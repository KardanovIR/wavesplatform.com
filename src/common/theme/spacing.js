import { combineMobileDesktopStyles } from './utils/combineMobileDesktopStyles';



const isValidMeasure = measure =>
    typeof measure === 'number';

const getSpacing = unit => (top, right, bottom, left) => {
    const spacing = {
        top: isValidMeasure(top) ? `${top * unit}px` : '',
        right: isValidMeasure(right) ? ` ${right * unit}px ` : '',
        bottom: isValidMeasure(bottom) ? ` ${bottom * unit}px ` : '',
        left: isValidMeasure(left) ? ` ${left * unit}px ` : ''
    }
    return spacing.top + spacing.right + spacing.bottom + spacing.left;
}



const createSpacing = (breakpoints, { unit = 8, radius = 4, inputHeight = 40 } = {}) => ({
    unit,
    radius,
    inputHeight,
    getSpacing: getSpacing(unit),

    body: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 1.5 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        )
    },

    body2: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 1.5 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        )
    },

    display4: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 3 },
            { marginTop: unit * 5 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 3 },
            { marginTop: unit * 5 }
        )
    },

    display3: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 2.5 },
            { marginTop: unit * 3.5 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 3 },
            { marginTop: unit * 5 }
        )
    },

    display2: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        )
    },

    display1: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 2 }
        ),
        '& + $body2': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        )
    },

    quote: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 1.5 }
        )
    },

    numeral: {
        // '& + $body': combineMobileDesktopStyles(
        //     { marginTop: unit * 1 },
        //     { marginTop: unit * 1.5 }
        // )
    },



    paddedTop: {
        paddingTop: unit * 5,
        [breakpoints.up('md')]: {
            paddingTop: unit * 8,
        },
        [breakpoints.up('lg')]: {
            paddingTop: unit * 12,
        }
    },

    paddedBottom: {
        paddingBottom: unit * 5,
        [breakpoints.up('md')]: {
            paddingBottom: unit * 8,
        },
        [breakpoints.up('lg')]: {
            paddingBottom: unit * 12,
        }
    },

    section: {
        composes: [
            '$paddedTop',
            '$paddedBottom',
        ]
    },

    sectionNarrow: {
        padding: [unit * 3, 0],
        [breakpoints.up('md')]: {
            padding: [unit * 6, 0],
        },
        [breakpoints.up('lg')]: {
            padding: [unit * 10, 0],
        }
    },

    sectionWide: {
        padding: [unit * 8, 0, unit * 6],
        [breakpoints.up('md')]: {
            padding: [unit * 15, 0, unit * 13],
        },
        [breakpoints.up('lg')]: {
            padding: [unit * 20, 0, unit * 17],
        }
    },

})



export default createSpacing;