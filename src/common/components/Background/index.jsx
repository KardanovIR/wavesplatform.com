import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';





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
        transform: 'translate(-50%, -50%)',

        zIndex: -1
    },
    skewed: {
        transform: 'translate(-50%, -50%) skewY(-5deg)',
    }
}


const Background = ({
    classes,
    children,
    className,
    wrapperClassName,
    style,
    skewed
}) => (
    <div className={cn(classes.wrapper, wrapperClassName)}>
        <div
            className={cn(
                classes.background,
                { [classes.skewed]: skewed },
                className
            )}
            style={style}
        />
        {children}
    </div>
)


Background.defaultProps = {
    className: '',
    wrapperClassName: '',
    skewed: false
}


export default injectSheet(styles)(Background);