import React from 'react';

import injectSheet from 'react-jss';


import IconsMap from './map';


const styles = {
    wrapper: {
        width: props => props.size,
        height: props => props.size,
    }
}


const CustomIcon = ({ classes, name, color, style }) => {
    const IconComponent = IconsMap[name];

    return (
        <div className={classes.wrapper} style={style}>
            <IconComponent fill={color} />
        </div> 
    )
}

CustomIcon.defaultProps = {
    color: 'currentColor'
}



export default injectSheet(styles)(CustomIcon);