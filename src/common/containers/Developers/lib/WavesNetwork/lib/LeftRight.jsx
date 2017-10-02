import React from 'react';

import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';

import injectSheet from 'react-jss';

const styles = theme => ({
    wrapper: {
        display: 'flex'
    },
    text: {
        flex: 1,
        color: theme.palette.gray[600]
    }
})


const MainScreen = ({
    classes,
    left,
    right,
    href
}) => (
    <div className={classes.wrapper}>
        <Typography className={classes.text}>{ left }</Typography>
        
        <Typography className={classes.text} align="right" noMargin>
            <Link href={href}>
                { right }
            </Link>
        </Typography>
    </div>
);


export default injectSheet(styles)(MainScreen);