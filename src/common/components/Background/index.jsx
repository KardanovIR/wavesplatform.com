import React from 'react';
import injectSheet from 'react-jss';



const styles = {
    wrapper: {
        position: 'relative',
        overflow: 'visible'
    },
    background: {
        position: 'absolute',
        width: '100vw',
        height: '100%',

        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) skewY(-3deg)',

        zIndex: -1
    }
}


const Background = ({ classes, children, className, style }) => (
    <div className={classes.wrapper}>
        <div className={classes.background + ' ' + className} style={style} />
        { children }
    </div>
)


Background.defaultProps = {
    className: ''
}


export default injectSheet(styles)(Background);