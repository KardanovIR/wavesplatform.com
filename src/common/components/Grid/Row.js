import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';



const styles = theme => ({
    row: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: 'auto',
        margin: theme.spacing.getSpacing(0, -1)
        // '& $row': {
        //     margin: theme.spacing.getSpacing(0, -1)
        // }
    },
    centered: {
        justifyContent: 'center'
    }
});



const Row = ({
    classes,
    className: classNameProp,
    children,
    centered
}) => {
    const className = cn(
        classes.row,
        {
            [classes.centered]: centered
        },
        classNameProp
    );

    return (
        <div className={className}>
            {children}
        </div>
    )
}

Row.defaultProps = {
    centered: false
}


export default injectSheet(styles)(Row);