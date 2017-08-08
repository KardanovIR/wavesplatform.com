import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

import cn from 'classnames';



const styles = theme => ({
    wrapper: {
        borderColor: theme.palette.gray[300],
        color: theme.palette.gray[300],
    },
    'wrapper-left': {
        borderLeft: '6px solid',
        padding: theme.spacing.getSpacing(0, 0, 0, 2)
    },
    'wrapper-right': {
        textAlign: 'right',
        borderRight: '6px solid',
        padding: theme.spacing.getSpacing(0, 2, 0, 0)
    },
    [theme.mixins.atMedia('md')]: {
        'wrapper-left': {
            padding: theme.spacing.getSpacing(0.5, 0, 0, 5)
        },
        'wrapper-right': {
            padding: theme.spacing.getSpacing(0.5, 5, 0, 0)
        },
    }
})



const BlockQuote = ({
    classes,
    className,
    children,
    align
}) => (
        <div className={cn(classes.wrapper, classes[`wrapper-${align}`], className)}>
            <Typography type="quote" color="gray-300">
                {children}
            </Typography>
        </div>
    )

BlockQuote.defaultProps = {
    align: 'left'
}


export default injectSheet(styles)(BlockQuote);