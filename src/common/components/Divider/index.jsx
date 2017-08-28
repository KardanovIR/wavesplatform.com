import React from 'react';
import injectSheet from 'react-jss';


const styles = theme => ({
    divider: {
        height: 1,
        width: '100%',
        backgroundImage: `radial-gradient(circle at center, ${theme.palette.gray[100]} 0, rgba(255,255,255,0) 100%)`,
    }
})


const Divider = ({
    classes,
    theme,      // eslint-disable-line
    sheet,      // eslint-disable-line
    ...rest
}) => (
    <div className={classes.divider} {...rest} />
)


export default injectSheet(styles)(Divider);