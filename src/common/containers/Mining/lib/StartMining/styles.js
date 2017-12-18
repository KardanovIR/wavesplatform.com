import startMiningArrow from './img/start_mining_arrow.svg';

export default theme => ({
    col: {
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 4,
    },
    imageWrapper: {
        position: 'relative',

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
        margin: [0, 'auto'],
        // padding: [0, '20%']
        fontSize: 16,
        color: theme.palette.grayBlue[750],
        opacity: 0.8,
    },
    [theme.breakpoints.up('lg')]: {
        arrow: {
            display: 'block'
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 400,
    },
    text: {
        fontSize: 23,
    },
    [theme.breakpoints.down("tablet")]:{
        flexVers: {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
        scroll: {
            display: 'flex',
        },
        buttons: {
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                width: 0,
            },
            '-ms-overflow-style': "none",
            overflow: "-moz-scrollbars-none",
            '& a': {
                marginRight: [theme.spacing.unit * 4.5],
            }
        },
        arrowRight: {
            transform: 'rotate(90deg)',
            width: '9%',
        },
        colArrow: {
            textAlign: 'left',
        },
        /*colBlock: {
            flexDirection: 'row-reverse',
            display: 'flex',
        },*/
        message: {
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
        },
        imageWrapper: {
            '&>svg': {
                maxWidth: 120,
            }
        },
        flexBlocks: {
            width: '100%',
            '&>div': {
                maxWidth: "95%",
            }
        }
    },
    [theme.breakpoints.up("tablet")]: {
        colBlock:{
            textAlign: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            display: 'flex',
            marginBottom: 0,
        },
        LastBlock: {
          justifyContent: 'flex-start',
        },
        imageWrapper: {
            '&>svg': {
                maxWidth: 120,
            }
        },
        flexBlocks: {
            display: 'flex',
            flexDirection: 'row',
        },
        arrowRight: {
            position: 'relative',
            width: '60%',
            top: [theme.spacing.unit * 7],
        },
        buttons: {
            '& a':{
                marginRight: [theme.spacing.unit * 2.5],
                boxSizing: 'border-box',
                maxWidth: 160,
                '& span': {
                    fontWeight: 400,
                }
            }
        }
    },
    [theme.breakpoints.up("md")]: {
        title: {
            fontSize: 23,
            fontWeight: 400,
        },
        text: {
            fontSize: 32,
        },
        flexBlocks: {
            display: 'flex',
            flexDirection: 'row',
        },
        imageWrapper: {
            '&>svg': {
                maxWidth: 150,
            }
        },
        arrowRight: {
            position: 'relative',
            width: '60%',
            top: [theme.spacing.unit * 7],
        },
        buttons: {
            '& a':{
                marginRight: [theme.spacing.unit * 4.5],
                boxSizing: 'border-box',
                maxWidth: 250,
                '& span': {
                    fontWeight: 400,
                }
            }
        }
    }
});
