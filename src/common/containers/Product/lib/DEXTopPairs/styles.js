const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit * 2,
    },
    headers: {
        display: 'flex',
        alignItems: "flex-end",
        justifyContent: 'space-between'
    },
    textGray: {
        color: theme.palette.gray[500],
    },
    [theme.breakpoints.up('md')]: {
        root: {
            marginTop: theme.spacing.unit * 9,
            
            position: 'relative',

            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: theme.spacing.radius,
    
                zIndex: -1,
    
                top: -theme.spacing.unit * 2,
                left: -theme.spacing.unit * 2,
    
                backgroundImage: 'linear-gradient(5deg, rgba(79, 119, 252, 0.0), #4f77fc);',
            }
        }
    }
})

export default styles;