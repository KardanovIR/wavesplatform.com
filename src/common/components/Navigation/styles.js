export default {
    wrapper: {
        '&:after': {
            content: '""',
            display: 'block',
            clear: 'both'
        }
    },
    logo: {
        float: 'left',
        background: 'green'
    },
    link: {
        color: 'green',
        '&:visited': {
            color: 'darkgrey'
        } 
    },
    navContainer: {
        float: 'right'
    }
} 