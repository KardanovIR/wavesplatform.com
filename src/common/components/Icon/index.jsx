import React from 'react';

import { compose } from 'ramda';
import injectSheet, { withTheme } from 'react-jss';
import cn from 'classnames';

import IconsMap from './lib';



const styles = {
    wrapper: {
        width: props => props.size,
        height: props => props.size,
    }
}


const Icon = ({ classes, theme, className, name, color }) => {
    const IconComponent = IconsMap[name];

    return (
        <div className={cn(classes.wrapper, className)}>
            <IconComponent fill={theme.palette[color.split('-')[0]][color.split('-')[1]]} />
        </div> 
    )
}


Icon.defaultProps = {
    size: 34,
    color: 'gray-500',
    className: ''
}


export default compose(
    injectSheet(styles),
    withTheme
)(Icon);