import { prop } from 'ramda';

const loaderBase = {
    borderRadius: '50%',
    animationFillMode: 'both',
    animation: 'load 1.8s infinite ease-in-out',
};

export default theme => ({
    loader: {
        ...loaderBase,

        width: prop('size'),
        height: prop('size'),

        color: ({ color }) => {
            const clr = theme.palette.getColor(color);
            console.log(clr);
            return clr;
        },

        margin: 'auto',
        position: 'relative',
        textIndent: '-9999em',
        transform: 'translateZ(0)',
        animationDelay: '-0.16s',

        '&:after, &:before': {
            ...loaderBase,
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            top: 0,
        },
        '&:before': {
            left: ({ size }) => -1.5 * size,
            animationDelay: '-0.32s',
        },
        '&:after': {
            left: ({ size }) => 1.5 * size,
        },
    },

    '@keyframes load': {
        '0%, 80%, 100%': {
            // transform: 'scale(1)'
            // boxShadow: '0 2.5em 0 -1.3em',
            boxShadow: ({size}) => `0 ${size}px 0 ${-size/2}px`,
        },
        '40%': {
            boxShadow: ({size}) => `0 ${size}px 0 0`,
        },
    },
})
