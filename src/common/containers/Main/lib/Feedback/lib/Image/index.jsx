import React from 'react';
import injectSheet from 'react-jss';

import cn from 'classnames';

import Typography from 'src/common/components/Typography';




const styles = theme => ({
    wrapper: {
        overflow: 'hidden',
        position: 'relative',

        paddingBottom: '110%',
        background: theme.palette.primary[500],
    },
    shade: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.getSpacing(6, 4, 4),
        zIndex: 0,

        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',

            top: 0,
            bottom: -50,
            left: 0,
            right: 0,
            zIndex: -1,

            background: theme.palette.gray[900],
            opacity: 0.7,
            transform: 'skewY(-3deg)'
        }
    },
    block: {
        marginBottom: theme.spacing.unit * 2,
        zIndex: 1
    }
})



const CompanyImage = ({
    classes,
    // className,
    logo,
    website,
    description
}) => (
        <div className={classes.wrapper}>
            <div className={classes.shade}>
                <div className={classes.block}>
                    {logo}
                </div>
                <Typography type="body" color="gray-0">
                    {description}
                </Typography>
                <Typography type="body" color="gray-300">
                    {website}
                </Typography>
            </div>
        </div>
    )


export default injectSheet(styles)(CompanyImage);