import startMiningArrow from './img/start_mining_arrow.svg';

const styles = ({ breakpoints, spacing }) => ({
    col: {
        textAlign: 'left',
    },
    imageWrapper: {
        position: 'relative',
        textAlign: 'center',
        '& > svg': {
            maxWidth: '80%',
        }
    },
    arrow: {
        position: 'absolute',
        width: 54,
        height: 12,
        background: `url(${startMiningArrow})`,
        right: 0,
        top: '50%',
        transform: 'translateX(32px)',
        display: 'none'
    },
    message: {
        maxWidth: 242,
        //margin: [0, 'auto']
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        fontSize: 16,
        // padding: [0, '20%']
    },
    title: {
        fontSize: 16,
        fontWeight: 400,
    },
    text: {
        fontSize: 23,
        fontWeight: 400,
    },
    flexRow: {
        flexDirection: "row-reverse",
        display: 'flex',
    },
    flexCol: {
        flexDirection: "column",
        display: 'flex',
    },
    colMargin: {
        marginBottom: spacing.unit * 4,
    },
    arrowDiv:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: spacing.unit * 20,
    },
    [breakpoints.up("md")]: {
        imageWrapper: {
            '& > svg': {
                maxWidth: 'auto',
            }
        },
        title: {
            fontSize: 23,
            fontWeight: 400,
        },
        text: {
            fontSize: 32,
        },
        flexer: {
            display: 'flex',
            flexDirection: 'row',

        },
        flexRow: {
            display: 'flex',
            flexDirection: "row",
        },
        message: {
            fontSize: 17,
            fontWeight: 400,
        },
    },
    [breakpoints.up('lg')]: {
        arrow: {
            display: 'block',
            transform: 'rotate(90deg)',
            position: 'relative',
            top: spacing.unit * 3,
        }
    }
});

export default styles;
