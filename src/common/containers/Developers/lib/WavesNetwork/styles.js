const styles = theme => ({
    text: {
        textAlign: 'center'
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    }
})

export default styles;