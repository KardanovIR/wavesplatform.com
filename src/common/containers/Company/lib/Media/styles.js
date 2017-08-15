import flexCentered from 'src/common/styles/flexCentered';


const styles = theme => ({
    root: {
    },
    media: {
        ...flexCentered,
        paddingTop: theme.spacing.unit * 6,
        paddingBottom: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 3,
    },
    logo: {
        maxWidth: '80%',
        height: 'auto'
    },
    link: {
        display: 'block'
    },
    contactUs: {
        textAlign: 'center'
    },
    [theme.mixins.atMedia('md')]: {
        link: {
            opacity: 0.6,
            transition: theme.transitions.create('opacity'),
            '&:hover': {
                opacity: 1
            }
        }
    }
})

export default styles;