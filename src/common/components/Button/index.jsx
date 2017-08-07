import React from 'react';

import cn from 'classnames';


import Typography from '../Typography';


import injectSheet from 'react-jss';
import styles from './styles';




const Button = ({
    classes,
    className,
    children,
    icon,
    ...rest
}) => (
    <button className={cn(classes.root, className)}>
        <div className={classes.content}>
            <div className={classes.icon}>
                {icon}
            </div>
            <div className={classes.text}>
                {children}
            </div>
        </div>
    </button>
)


Button.defaultProps = {
    color: 'primary-500',
    className: ''
}


export default injectSheet(styles)(Button);