import React from 'react';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';

const SpinnerCircle = ({ classes, className, style }) => {
    return (
        <div className={cn(classes.loader, className)} style={style}>
            <svg className={classes.circular} viewBox="25 25 50 50">
                <circle
                    className={classes.path}
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                />
            </svg>
        </div>
    );
};

export default injectSheet(styles)(SpinnerCircle);
