import image from './image';


const styles = theme => ({
    ...image(theme),

    xsHidden: {
        display: 'none',
    },

    root: {
        marginBottom: '90px',
        // marginBottom for displays
        [theme.breakpoints.up('sm')]: {
            marginBottom: '100px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '150px',
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: '220px',
        },
    },

    imageCol: {
        margin: [theme.spacing.unit, 0, theme.spacing.unit * 2],
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