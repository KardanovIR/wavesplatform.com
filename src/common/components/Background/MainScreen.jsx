import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';


import bgMain from './img/main_bgr.svg';
import bgCommon from './img/common_bgr.svg';


const styles = theme => ({
    wrapper: {
        position: 'relative',
        overflow: 'visible'
    },
    background: {
        position: 'absolute',
        width: 2560,

        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -1,

        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',

        top: -100,
        [theme.breakpoints.up('md')]: {
            top: -150
        },
        [theme.breakpoints.up('lg')]: {
            top: -230
        },
    },
    main: {
        height: 841,
        backgroundImage: `url(${bgMain})`,
    },
    common: {
        height: 704,
        backgroundImage: `url(${bgCommon})`,
    },
})


const MainScreenBackground = ({
    classes,
    children,
    className,
    main,
}) => (
        <div className={classes.wrapper}>
            <div
                className={cn(
                    classes.background,
                    {
                        [classes.main]: main,
                        [classes.common]: !main,
                    },
                    className
                )}
            />
            {children}
        </div>
    )


export default injectSheet(styles)(MainScreenBackground);