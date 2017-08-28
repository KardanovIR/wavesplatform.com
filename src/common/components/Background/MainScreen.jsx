import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';


import bgWide from './img/wide_bgr.svg';
import bgCommon from './img/common_bgr.svg';
import bgProduct from './img/product_bgr.svg';


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
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',

        top: -100,
        [theme.breakpoints.up('md')]: {
            top: -165,
        },
        [theme.breakpoints.up('lg')]: {
            top: -230,
            width: 2560,
            backgroundSize: '100%',
        },
    },

    // height
    wide: {
        backgroundImage: `url(${bgWide})`,
        height: 'calc(100% + 160px)',
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% + 200px)',
        },
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% + 300px)',
        },
        [theme.breakpoints.up('lg')]: {
            height: 841,
        },
    },
    common: {
        backgroundImage: `url(${bgCommon})`,
        [theme.breakpoints.up('md')]: {
            height: 500,
        },
        [theme.breakpoints.up('lg')]: {
            height: 705,
        },
    },
    product: {
        composes: '$wide',
        backgroundImage: `url(${bgProduct})`,
    }
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
                    {
                        [classes.product]: type === "product",
                        [classes.wide]: type === "wide",
                        [classes.common]: type === "common",
                    },
                    className
                )}
            />
            {children}
        </div>
    )

    
MainScreenBackground.defaultProps = {
    type: 'common'
}


export default injectSheet(styles)(MainScreenBackground);