import React from 'react';
import injectSheet from 'react-jss';


const styles = theme => ({
    divider: {
        height: 1,
        width: '100%',
    },
    plain: {
        background: theme.palette.gray[200]
    },
    gradient: {
        backgroundImage: `radial-gradient(circle at center, ${theme.palette.gray[200]} 0, rgba(255,255,255,0) 100%)`,
    }
})



const Divider = ({
    classes,
    theme,      // eslint-disable-line
    sheet,      // eslint-disable-line
    gradient,
    ...rest
}) => (
    <div className={`${classes.divider} ${gradient ? classes.gradient : classes.plain}`} {...rest} />
)



export default injectSheet(styles)(Divider);