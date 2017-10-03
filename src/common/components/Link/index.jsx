import React from 'react';

import cn from 'classnames';


import injectSheet from 'react-jss';

const styles = theme => ({
    link: {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        cursor: 'pointer',

        borderBottom: `1px solid ${theme.palette.opaque(theme.palette.primary[500], 0.5)}`,

        '&:hover': {
            color: theme.palette.primary[300],
            borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
        },
        '&:active': {
            color: theme.palette.primary[300],
            borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
        },
    },

    pseudo: {
        borderBottomStyle: 'dashed !important',
    },

    noDecoration: {
        border: 0
    },

    inverted: {
        color: theme.palette.grayBlue[200],
        borderColor: theme.palette.opaque(theme.palette.grayBlue[200], 0.5),
        '&:hover': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
        '&:active': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
    }
})



const Link = ({
    classes,
    className: classNameProp,
    inverted,
    pseudo,
    textDecoration,
    sheet, // eslint-disable-line
    theme, // eslint-disable-line
    ...rest
}) => {
    const className = cn(
        classes.link,
        {
            [classes.inverted]: inverted,
            [classes.pseudo]: pseudo,
            [classes.noDecoration]: !textDecoration,
        },
        classNameProp
    );

    const Element = pseudo ? 'span' : 'a';

    return (
        <Element className={className} { ...rest } />
    )
}


Link.defaultProps = {
    textDecoration: true
}


export default injectSheet(styles)(Link);