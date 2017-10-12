import React from 'react';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';

const SpinnerPoints = ({ classes, className, style }) => {
    return <div style={style} className={cn(classes.loader, className)} />;
};

SpinnerPoints.defaultProps = {
    size: 16,
    color: 'primary[900]'
}

export default injectSheet(styles)(SpinnerPoints);
