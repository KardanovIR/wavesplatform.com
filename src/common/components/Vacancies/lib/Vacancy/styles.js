import arrow from './img/arrow.svg';


export default theme => ({
    title: {
        marginBottom: theme.spacing.unit / 2,
    },
    subtitle: {
        fontWeight: 500,
        marginBottom: theme.spacing.unit,
    },
    location: {
        color: theme.palette.gray[300],
    },
    locationText: {
        verticalAlign: '-5%',
        marginLeft: '.3em',
    },

    wrapper: {
        position: 'relative',
    },

    clickable: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        cursor: 'pointer',
        height: theme.spacing.unit * 12,
    },

    collapsed: {
        height: theme.spacing.unit * 12,
        overflow: 'hidden',
        // shadow hover
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .08)',
            borderRadius: theme.spacing.radius,
            opacity: 0,
            transition: theme.transitions.create('opacity')
        },
        '& $content': {
            opacity: 0,
            transition: 'none'
        },
        '& $arrow': {
            transform: 'none'
        },
    },

    arrow: {
        position: 'absolute',
        top: 'calc(50% - 11px)',
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: `${theme.palette.primary[500]} url(${arrow}) no-repeat center 9px`,
        right: theme.spacing.unit * 2.5,
        transition: theme.transitions.create(
            'transform',
            theme.transitions.durationMedium
        ),
        transform: 'rotate(-180deg)'
    },

    content: {
        // opacity: 0,
        transition: theme.transitions.create(
            'opacity',
            theme.transitions.durationMedium
        )
    },
    [theme.breakpoints.up('md')]: {
        clickable: {
            height: theme.spacing.unit * 17,
        },
        collapsed: {
            height: theme.spacing.unit * 17,
            '&:hover:before': {
                opacity: 1
            },
        },
        subtitle: {
            marginBottom: theme.spacing.unit * 1.5,
        },

        arrow: {
            right: theme.spacing.unit * 5
        },
    }
})