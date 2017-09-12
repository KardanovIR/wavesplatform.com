import React from 'react';

import Wrapper from 'src/common/components/Wrapper';

import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    container: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    snackbar: {
        boxSizing: 'border-box',
        position: 'fixed',
        left: 0,
        right: 0,
        top: '100%',
        background: '#000726',
        opacity: 0.87,

        transition: theme.transitions.create('transform', theme.transitions.durationLong)
    },
    open: {
        transform: 'translateY(-100%)'
    },
    test: {
        height: 100
    },
    content: {
        position: 'relative',
    },
    close: {
        position: 'absolute',
        height: theme.spacing.unit * 3,
        width: theme.spacing.unit * 3,
        top: -theme.spacing.unit,
        right: -theme.spacing.unit,
        color: theme.palette.gray[200],
        cursor: 'pointer',
        padding: theme.spacing.unit,

        '&:hover': {
            color: theme.palette.gray[50],
        },
    }
})


const Snackbar = ({
    classes,
    open,
    children,
}) => (
        <div className={cn(classes.snackbar, { [classes.open]: open })}>
            <Wrapper className={classes.container}>
                <div className={classes.content}>
                    {children}
                </div>
            </Wrapper>
        </div>
    )


Snackbar.defaultProps = {
    open: true
}


export default injectSheet(styles)(Snackbar);