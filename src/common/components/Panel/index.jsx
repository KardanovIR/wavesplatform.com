import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';
import styles from './styles';



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