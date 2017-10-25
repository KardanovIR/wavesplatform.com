import flexCentered from 'src/common/styles/flexCentered';


const styles = theme => ({
    root: {
    },
    media: {
        ...flexCentered,
        marginBottom: theme.spacing.unit * 3,
        height: 180
    },
    logo: {
        maxWidth: '80%',
        height: 'auto'
    },
    link: {
        display: 'block',
        opacity: 0.6,
        transition: theme.transitions.create('opacity'),
        '&:hover': {
            opacity: 1
        }
    },
    contactUs: {
        textAlign: 'center'
    },
})

export default styles;