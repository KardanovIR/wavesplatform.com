import React from 'react';

import { withTheme } from 'react-jss';

import IconsMap from './lib';


const Icon = ({ color, theme, name, ...rest }) => {
    const IconComponent = IconsMap[name];
    
    if (process.env.NODE_ENV !== 'production') {
        if (!IconComponent) console.warn(`Icon '${name}' not found. Please check icon imports`);
    }

    const passedColor = color !== 'inherit'
        ? theme.palette[color.split('-')[0]][color.split('-')[1]]
        : undefined;

    return <IconComponent color={passedColor} name={name} { ...rest } />;
}


Icon.defaultProps = {
    size: 34,
    color: 'inherit'
}


export default withTheme(Icon);