import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({
    wrapper: {
        background: theme.palette.primary[0],
        borderRadius: theme.spacing.radius,
        boxShadow: `0 2px 10px ${theme.palette.gray[500]}`
    }
})



const Paper = ({ classes, className, children }) => (
    <div className={cn(classes.wrapper, className)}>
        { children }
    </div>
)


export default injectSheet(styles)(Paper);