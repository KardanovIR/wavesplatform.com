import React from 'react';

import cn from 'classnames';


import injectSheet from 'react-jss';

const styles = theme => ({
    link: {
        color: theme.palette.primary[500],
        '&:hover': {
            color: theme.palette.primary[300]
        },
        '&:active': {
            color: theme.palette.primary[300]
        },
    }
})



const Link = ({
    classes,
    className: classNameProp,
    sheet, // eslint-disable-line
    theme, // eslint-disable-line
    ...rest
}) => {
    const className = cn(classes.link, classNameProp);

    return (
        <a className={className} { ...rest } />
    )
}



export default injectSheet(styles)(Link);