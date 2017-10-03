import arrow from './img/arrow.svg';


const styles = theme => ({
    reset: {
        // reset
        outline: 'none',
        appearance: 'none',
        border: 'none',
        '&::-ms-expand': {
            display: 'none'
        },
        '&::-moz-focus-inner': {
            border: 0
        }
    },
    arrow: {
        backgroundImage: `url(${arrow})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: theme.spacing.unit,
        backgroundPosition: `right ${theme.spacing.unit * 1.5}px top 17px`,
    },
    root: {
        composes: [
            '$reset',
            '$arrow',
        ],

        ...theme.typography.body,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',

        borderRadius: theme.spacing.radius,


        backgroundColor: theme.palette.grayBlue[500],
        color: theme.palette.grayBlue[200],

        boxSizing: 'border-box',
        padding: [0, theme.spacing.unit * 3, 0, theme.spacing.unit * 1.5],

        height: theme.spacing.inputHeight,
        lineHeight: `${theme.spacing.inputHeight}px`,


        // focus
        transition: theme.transitions.create('background-color'),
        '&:focus': {
            backgroundColor: theme.palette.grayBlue[300],
        },
    },
    disabled: {
        opacity: 0.6,
        pointerEvents: 'none'
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.danger[500]}`
    },
})


export default styles;