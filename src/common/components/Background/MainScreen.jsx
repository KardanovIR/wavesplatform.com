import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';


import bgLight from './img/light_bgr.svg';
import bgDark from './img/dark_bgr.svg';
// import bgCommon from './img/common_bgr.svg';
// import bgProduct from './img/product_bgr.svg';


const styles = theme => ({
    wrapper: {
        position: 'relative',
        overflow: 'visible'
    },
    background: {
        position: 'absolute',

        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -1,

        width: '100vw',
        backgroundSize: 2560,
        backgroundPosition: 'center bottom',

        backgroundRepeat: 'no-repeat',

        top: -100,
        [theme.breakpoints.up('md')]: {
            top: -165,
        },
        [theme.breakpoints.up('lg')]: {
            top: -230,
            // width: 2560,
            // backgroundSize: '100%',
        },
    },

    // height
    width: {
        height: 'calc(100% + 250px)',
        // [theme.breakpoints.up('sm')]: {
        //     height: 'calc(100% + 280px)',
        // },
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% + 320px)',
        },
        [theme.breakpoints.up('lg')]: {
            // height: 841,
            height: 'calc(100% + 400px)',
        },
    },

    light: {
        backgroundImage: `url(${bgLight})`,
    },
    dark: {
        backgroundImage: `url(${bgDark})`,
    }
    // common: {
    //     backgroundImage: `url(${bgCommon})`,
    //     height: 'calc(100% + 190px)',
    //     [theme.breakpoints.up('md')]: {
    //         height: 500,
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         height: 705,
    //     },
    // },
    // product: {
    //     composes: '$wide',
    //     backgroundImage: `url(${bgProduct})`,
    // }
})


const MainScreenBackground = ({
    classes,
    children,
    className,
    type,
}) => (
        <div className={classes.wrapper}>
            <div
                className={cn(
                    classes.background,
                    classes.width,
                    {
                        [classes.dark]: type === "dark",
                        [classes.light]: type === "light",
                        // [classes.common]: type === "common",
                    },
                    className
                )}
            />
            {children}
        </div>
    )

    
MainScreenBackground.defaultProps = {
    type: 'light'
}


export default injectSheet(styles)(MainScreenBackground);