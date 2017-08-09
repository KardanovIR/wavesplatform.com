const styles = theme => ({
    ...theme.typography,
    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    }
})


export default styles;