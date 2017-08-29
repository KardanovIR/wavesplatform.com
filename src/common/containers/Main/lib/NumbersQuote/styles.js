import deloitteLogo from './img/deloitte_logo.svg';



const styles = theme => ({
    deloitte: {
        textAlign: 'right',
        borderRight: `6px solid ${theme.palette.gray[300]}`,
        padding: theme.spacing.getSpacing(0.5, 5, 0, 0)
    },
    deloitteLogo: {
        display: 'inline-block',
        background: `url(${deloitteLogo}) no-repeat`,
        width: 136,
        height: 26,
        backgroundSize: '100%',
        marginBottom: theme.spacing.unit
    },

    [theme.mixins.atMedia('md')]: {
        numbersCol: {
            order: 3
        },
        imageCol: {
            order: 2
        },
        ctaButton: {
            display: 'inline-block'
        },
        secondCtaButton: {
            margin: 0
        }
    },
    [theme.breakpoints.up('lg')]: {
        numbersCol: {
            marginTop: theme.spacing.unit*10,
        },
        titleTextCtaCol: {
            height: 560
        }
    }
})

export default styles;