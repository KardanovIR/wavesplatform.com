import React from 'react';
import PropTypes from 'prop-types';


import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';


import IconsMap from './lib';




const IconProduct = ({
    classes,
    className,
    name,
    circle,
    style,
    size,
}) => {
    const IconComponent = IconsMap[name];

    if (process.env.NODE_ENV !== 'production') {
        if (!IconComponent) console.warn(`Icon '${name}' not found. Please check icon imports`);
    }

    const wrapperStyles = cn(
        {
            [classes.root]: !size,
            [classes.centered]: circle,
            [classes.rootCustomSize]: size,
            [classes.circleLight]: circle === true || circle === "light",
            [classes.circleDark]: circle === "dark",
            [classes.circleCyan]: circle === "cyan",
        },
        className
    );


    // icon without circle
    if (!circle) {
        return (
            <div className={wrapperStyles} style={style}>
                <IconComponent />
            </div>
        )
    } else {
        return (
            <div className={wrapperStyles} style={style}>
                <div className={classes.innerWrapper}>
                    <IconComponent />
                </div>
            </div>
        )
    }
}


IconProduct.propTypes = {
    name: PropTypes.string.isRequired,
    circle: PropTypes.oneOf([true, 'light', 'dark', 'cyan']),
}



export default injectSheet(styles)(IconProduct);