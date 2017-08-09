import flexCentered from '../../../../styles/flexCentered';


export default theme => ({
    wrapper: {
        justifyContent: 'center',
    },
    icon: {
        ...flexCentered,
        display: 'block',
        width: 40,
        height: 40,
        margin: '0 auto'
    },
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            justifyContent: 'flex-start'
        }
    }
})