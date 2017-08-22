import placeholder from 'src/common/styles/placeholder';



const styles = theme => ({
    title: {
        textAlign: 'center'
    },
    imageWrapper: {
        position: 'relative',
        paddingTop: '66%',
        overflow: 'visible',
        ...placeholder,
    },
    image: {
        width: '90%',
        height: '115%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,

        backgroundSize: '100%',
        transform: 'rotate(-6deg)',
        marginBottom: theme.spacing.unit * 2
    },
    column: {
        marginBottom: theme.spacing.unit*4
    },
    columnContent: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    topParagraph: {
        flex: 1
    },
    bottomParagraph: {
        flex: 0
    },
    [theme.mixins.atMedia('md')]: {
        column: {
            marginBottom: 0
        },
        columnRight: {
            textAlign: 'right'
        }
    }
})

export default styles;