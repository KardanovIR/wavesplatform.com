import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(2),
        borderRadius: theme.spacing.radius,
    },
    light: {
        border: `1px solid ${theme.palette.gray[300]}`
    },
    dark: {
        background: theme.palette.gray[300]
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(4),
            borderRadius: theme.spacing.radius,
        },
    }
})



const Panel = ({
    classes,
    className,
    children,
    dark
}) => (
        <div
            className={cn(classes.wrapper, {
                [classes.light]: !dark,
                [classes.dark]: dark,
            }, className)}
        >
            {children}
        </div>
    )

    

export default injectSheet(styles)(Panel);