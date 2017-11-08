import React, { Component } from 'react';

import Snackbar from 'src/common/components/Snackbar';
import Typography from 'src/common/components/Typography';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';

const styles = theme => ({
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textWrapper: {
        flex: '1 1 100%',
        marginBottom: theme.spacing.unit * 2,
    },

    text: {
        width: '100%',
    },

    button: {
        ...theme.typography.button,

        whiteSpace: 'nowrap',

        boxSizing: 'border-box',
        transition: theme.transitions.create('color'),
        cursor: 'pointer',
        padding: [theme.spacing.unit * 2, theme.spacing.unit * 2],
    },

    passButton: {
        composes: '$button',
        color: '#fcbc32',
        '&:hover': {
            color: theme.palette.gray[0],
        },
        marginLeft: -theme.spacing.unit * 2,
    },

    closeButton: {
        composes: '$button',
        color: theme.palette.gray[600],
        '&:hover': {
            color: theme.palette.gray[0],
        },
        marginRight: -theme.spacing.unit * 2,
        float: 'right',
    },

    buttonWrapper: {
        flex: '0 0 50%',
    },

    [theme.breakpoints.up('sm')]: {
        container: {
            paddingBottom: theme.spacing.unit * 2,
        },

        grid: {
            flexWrap: 'nowrap',
        },

        textWrapper: {
            flexBasis: 'auto',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
        },

        buttonWrapper: {
            flexBasis: 'auto',
        },

        passButton: {
            margin: 0,
        },
    },
});

class SnackbarStressTest extends Component {
    static defaultProps = {
        onShow: () => {},
        onClose: () => {},
        onClick: () => {},
        showDelay: 5000
    };

    state = {
        open: false,
    };

    componentDidMount() {
        if (this.props.show) {
            setTimeout(() => {
                this.props.onShow();
                this.setState({ open: true });
            }, this.props.showDelay);
        }
    }

    handleClose = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClose();
        this.setState({ open: false });
    };

    handleClick = () => {
        this.props.onClick();
    };

    render() {
        const { classes } = this.props;
        return (
            <a href={url('waves-ng')} onClick={this.handleClick}>
                <Snackbar open={this.state.open} className={classes.snackbar}>
                    <div className={classes.grid}>
                        <div className={classes.textWrapper}>
                            <Typography inverted cut className={classes.text}>
                                Hi there! We’re currently stress testing our
                                awesome new Waves-NG algorithm. Check it out! 🚀
                            </Typography>
                        </div>
                        <div className={classes.buttonWrapper}>
                            <div className={classes.passButton}>
                                Check it out
                            </div>
                        </div>
                        <div className={classes.buttonWrapper}>
                            <div
                                className={classes.closeButton}
                                onClick={this.handleClose}
                            >
                                Close
                            </div>
                        </div>
                    </div>
                </Snackbar>
            </a>
        );
    }
}

export default injectSheet(styles)(SnackbarStressTest);
