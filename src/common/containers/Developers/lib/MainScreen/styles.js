import table from './img/table.svg';


const styles = theme => ({
    root: {},
    subtitle: {
        maxWidth: '80%'
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '67%',
        overflow: 'visible',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,

        background: `url(${table}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.breakpoints.up('md')]: {
        image: {
            width: '130%',
            height: '130%',
            top: -30,
            left: 0,
        },
    },
    [theme.breakpoints.up('lg')]: {
        image: {
            width: '110%',
            height: '110%',
            top: -70,
            left: 100,
        },
    }
})

export default styles;