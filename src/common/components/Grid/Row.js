import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({
    row: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: 'auto',
        '& $row': {
            margin: theme.spacing.getSpacing(0 -1)
        }
    }
});



const Row = ({ classes, className, children }) => (
    <div className={cn(classes.row, className)}>
        {children}
    </div>
);


export default injectSheet(styles)(Row);