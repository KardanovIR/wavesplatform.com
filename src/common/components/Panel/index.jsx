import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';
import { compose } from 'ramda';



const styles = theme => ({
    root: {
        padding: theme.spacing.getSpacing(2.5, 2),
        borderRadius: theme.spacing.radius,
    },
    light: {
        border: `1px solid ${theme.palette.gray[300]}`
    },
    dark: {
        background: theme.palette.gray[900]
    },
    [theme.mixins.atMedia('md')]: {
        root: {
            padding: theme.spacing.getSpacing(4, 5, 4.5),
            borderRadius: theme.spacing.radius,
        },
    }
})



export const Panel = ({
    classes,
    className,
    dark,

    sheet,	// eslint-disable-line
    theme,	// eslint-disable-line

    element: Element,
    
    ...rest
}) => (
        <Element
            className={cn(classes.root, {
                [classes.light]: !dark,
                [classes.dark]: dark,
            }, className)}
            { ...rest }
         />
    )

Panel.defaultProps = {
    element: 'div'
}


export default injectSheet(styles)(Panel)