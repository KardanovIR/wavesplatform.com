const styles = theme => ({
    title: {
        textAlign: 'center'
    },
    column: {
        marginBottom: theme.spacing.unit*4
    },
    imageWrapper: {
        boxShadow: '0 5px 20px rgba(0,0,0,.08)'
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
    rowNumbers: {
        justifyContent: 'space-around'
    },
    [theme.breakpoints.up('md')]: {
        column: {
            marginBottom: 0
        },
        columnRight: {
            textAlign: 'right',
            paddingLeft: '10%'
        },
        columnLeft: {
            paddingRight: '10%'
        }
    },
    [theme.breakpoints.up('lg')]: {
        columnRight: {
            paddingLeft: '20%'
        },
        columnLeft: {
            paddingRight: '20%'
        }
    }
})

export default styles;