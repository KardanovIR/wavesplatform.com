import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    // wrapper: {
    //     justifyContent: 'center',
    // },
    icon: {
        ...flexCentered,
        // display: 'block',
        width: 30,
        height: 30,
        margin: [0, 'auto', theme.spacing.unit*2],
        color: theme.palette.gray[500]
    },
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            justifyContent: 'flex-start'
        }
    }
})