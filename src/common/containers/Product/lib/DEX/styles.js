import placeholder from 'src/common/styles/placeholder';



const styles = theme => ({
    row: {
        // padding: theme.spacing.getSpacing(4, 0)
    },
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

    // withMargin: {
    //     marginBottom: theme.spacing.unit * 2
    // },
    // fact: {
    //     maxWidth: '300px',
    //     margin: '0 auto'
    // },
    // wrapper: {
    //     borderTop: `1px solid ${theme.palette.gray[50]}`,
    //     borderBottom: `1px solid ${theme.palette.gray[50]}`,
    // },
    [theme.mixins.atMedia('md')]: {
        column: {
            marginBottom: 0
        }
    }
})

export default styles;