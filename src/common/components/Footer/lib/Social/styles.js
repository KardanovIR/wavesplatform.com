import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    icon: {
        ...flexCentered,
        width: 30,
        height: 30,
        marginBottom: theme.spacing.unit*2,
        color: theme.palette.gray[500],
        transition: theme.transitions.create('color'),
        '&:hover': {
            color: theme.palette.gray[0],
        }
    },
    [theme.mixins.atMedia('md')]: {
        icon: {
            margin: 0
        }
    }
})