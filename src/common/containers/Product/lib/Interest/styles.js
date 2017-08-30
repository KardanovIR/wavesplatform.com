import bgImage from 'src/common/styles/bgImage';


const styles = theme => ({
    column: {
        display: 'flex',
        marginBottom: theme.spacing.unit * 2
    },
    panel: {
        flex: 1,
    },
    panelTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        ...bgImage,
        height: theme.spacing.unit * 5,
        flex: [0, 0, `${theme.spacing.unit * 5}px`],
        marginRight: theme.spacing.unit * 2,
    },
    [theme.mixins.atMedia('md')]: {
        feature: {
            marginBottom: theme.spacing.unit * 6
        }
    }
})

export default styles;