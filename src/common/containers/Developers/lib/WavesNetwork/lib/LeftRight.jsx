import React from 'react';

import Typography from 'src/common/components/Typography';

import injectSheet from 'react-jss';

const styles = {
    wrapper: {
        display: 'flex'
    },
    text: {
        flex: 1
    }
}


const MainScreen = ({
    classes,
    left,
    right,
    href
}) => (
    <div className={classes.wrapper}>
        <Typography className={classes.text}>{ left }</Typography>
        <Typography className={classes.text} align="right" color="gray-500" noMargin>
            <a href={href}>
                { right }
            </a>
        </Typography>
    </div>
);


export default injectSheet(styles)(MainScreen);