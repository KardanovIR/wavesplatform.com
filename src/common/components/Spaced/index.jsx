import React from 'react';

import classNames from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';



const Spaced = ({
    classes,
    className: classNameProp,
    theme,	// eslint-disable-line
    sheet,	// eslint-disable-line

    top,
    right,
    bottom,
    left,
    ...rest
}) => {
    const className = classNames({
        [classes['margin-top-2']]: top === true,
        [classes[`margin-top-${String(top)}`]]: typeof top === 'number',
        [classes['margin-right-2']]: right === true,
        [classes[`margin-right-${String(right)}`]]: typeof right === 'number',
        [classes['margin-bottom-2']]: bottom === true,
        [classes[`margin-bottom-${String(bottom)}`]]: typeof bottom === 'number',
        [classes['margin-left-2']]: left === true,
        [classes[`margin-left-${String(left)}`]]: typeof left === 'number',
    }, classNameProp);


    return <div className={className} { ...rest } />
}


export default injectSheet(styles)(Spaced);