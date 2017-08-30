import image from './image';


const styles = theme => ({
    ...image(theme),

    xsHidden: {
        display: 'none',
    },

    root: {
        marginBottom: '70px',
        // marginBottom for displays
        [theme.breakpoints.up('sm')]: {
            marginBottom: '80px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '100px',
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: '120px',
        },
    },

    imageColMargin: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
    },

    buttonWrapper: {
        display: 'inline-block',
        margin: [0, theme.spacing.unit * 2, theme.spacing.unit * 2, 0]
    },

    [theme.mixins.atMedia('sm')]: {
        xsOnly: {
            display: 'none',
        },
        xsHidden: {
            display: 'block',
        },
        imageCol: {
            position: 'relative',
            height: 0,
            overflow: 'visible',
        },
        imageColMargin: {
            margin: 0
        },
        ctaButton: {
            display: 'inline-block'
        },
        secondCtaButton: {
            margin: 0
        },
        textCut: {
            paddingRight: '20%'
        }
    },
})

export default styles;