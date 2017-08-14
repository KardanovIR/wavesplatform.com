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



const createSpacing = ({ unit = 8, radius = 4, inputHeight = 40 } = {}) => ({
    unit,
    radius,
    inputHeight,
    getSpacing: getSpacing(unit),

    body: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 1.5 }
        )
    },

    display4: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 3 },
            { marginTop: unit * 5 }
        )
    },

    display3: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 2.5 },
            { marginTop: unit * 3.5 }
        )
    },

    display2: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1.5 },
            { marginTop: unit * 2.5 }
        )
    },

    display1: {
        '& + $body': combineMobileDesktopStyles(
            { marginTop: unit * 1 },
            { marginTop: unit * 2 }
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

})



export default createSpacing;