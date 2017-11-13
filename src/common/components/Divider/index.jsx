import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
    divider: {
        height: 1,
        width: '100%',
    },
    plain: {
        background: theme.palette.grayBlue[200],
    },
    gradient: {
        backgroundImage: `radial-gradient(circle at center, ${theme.palette
            .grayBlue[200]} 0, rgba(255,255,255,0) 100%)`,
    },
});

const Divider = ({
    classes,
    className: classNameProp,
    theme, // eslint-disable-line
    sheet, // eslint-disable-line
    gradient,
    ...rest
}) => (
    <div
        className={cn(
            classes.divider,
            {
                [classes.gradient]: gradient,
                [classes.plain]: !gradient,
            },
            classNameProp
        )}
        {...rest}
    />
);

export default injectSheet(styles)(Divider);
