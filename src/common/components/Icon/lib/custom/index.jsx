import React from 'react';

import IconsMap from './map';


const CustomIcon = ({ name, color, size, style }) => {
    const IconComponent = IconsMap[name];

    if (process.env.NODE_ENV !== 'production') {
        if (!IconComponent) console.warn(`Icon '${name}' not found. Please check icon imports`);
    }
    
    return <IconComponent fill={color} size={size} style={style} />
}


CustomIcon.defaultProps = {
    color: 'currentColor',
    style: { verticalAlign: 'middle' }
}



export default CustomIcon;