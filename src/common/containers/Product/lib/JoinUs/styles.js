import flexCentered from 'src/common/styles/flexCentered';


const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(5, 0, 5),
        flexDirection: 'row-reverse'
    },
    article: {
        marginBottom: theme.spacing.unit * 4
    },
    iconWrapper: {
        ...flexCentered,
        float: 'left',
        width: 40,
        height: 40,
        background: theme.palette.gray[900],
        marginRight: theme.spacing.unit * 2,
        borderRadius: '50%'
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(20, 0, 15)
        },
        article: {
            marginBottom: 0
        },
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    }
})

export default styles;