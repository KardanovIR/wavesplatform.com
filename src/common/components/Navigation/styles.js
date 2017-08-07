export default theme => ({
    wrapper: {
        '&:after': {
            content: '""',
            display: 'block',
            clear: 'both'
        }
    },
    logo: {
        float: 'left',
        height: 40,
        width: 40
    },
    link: {
        color: 'green',
        '&:visited': {
            color: 'darkgrey'
        } 
    },
    navContainer: {
        float: 'right'
    },
    mobileNav: {
        display: 'block',
        [theme.mixins.atMedia('md')]: {
            display: 'none'
        }
    },
    desktopNav: {
        display: 'none',
        [theme.mixins.atMedia('md')]: {
            display: 'block'
        }
    }
} )