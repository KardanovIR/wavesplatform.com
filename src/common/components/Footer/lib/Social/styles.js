import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    wrapper: {
        justifyContent: 'center',
    },
    icon: {
        ...flexCentered,
        display: 'block',
        width: 30,
        height: 30,
        margin: '0 auto',
        transition: theme.transitions.create('opacity'),
        '&:hover': {
            opacity: 0.6
        }
    },
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            justifyContent: 'flex-start'
        }
    }
})