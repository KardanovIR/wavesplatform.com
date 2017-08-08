import React from 'react';

import cn from 'classnames';


import injectSheet from 'react-jss';

const styles = theme => ({
    link: {
        color: 'inherit',
        '&:hover': {
            color: theme.palette.secondary[500]
        },
        '&:active': {
            color: theme.palette.secondary[500]
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