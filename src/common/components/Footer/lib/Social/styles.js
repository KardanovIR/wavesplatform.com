import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    icon: {
        ...flexCentered,
        width: 30,
        height: 30,
        margin: [theme.spacing.unit, 0],
        color: theme.palette.gray[500],
        transition: theme.transitions.create('color'),
        '&:hover': {
            color: theme.palette.gray[0],
        }
    },
    col: flexCentered,
    [theme.breakpoints.down('sm')]: {
        col: {
            flexBasis: '20%',
        },
    },
    [theme.breakpoints.only('sm')]: {
        wrapper: {
            justifyContent: 'space-around'
        },
    },
    [theme.breakpoints.up('md')]: {
        icon: {
            margin: 0
        }
    }
})