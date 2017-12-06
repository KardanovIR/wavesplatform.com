import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    icon: {
        ...flexCentered,
        width: 30,
        height: 30,
        margin: [theme.spacing.unit, 0],
        color: '#fff',
        transition: theme.transitions.create('opacity'),
        opacity: .6,
        '&:hover': {
            opacity: 1
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
