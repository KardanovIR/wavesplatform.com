import React from 'react';
import injectSheet from 'react-jss';


import Typography from 'src/common/components/Typography';


const styles = theme => ({
    wrapper: {
        overflow: 'hidden',
        position: 'relative',

        paddingBottom: '80%',
        background: theme.palette.gray[50],
    },
    imageWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    shade: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.getSpacing(4, 3, 3),
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

            background: theme.palette.primary[500],
            transform: 'skewY(-3deg)'
        }
    },
    block: {
        marginBottom: theme.spacing.unit * 2,
        zIndex: 1
    },
    [theme.mixins.atMedia('md')]: {
        shade: {
            padding: theme.spacing.getSpacing(6, 4, 4)
        }
    }
})



const CompanyImage = ({
    classes,
    image,
    logo,
    description
}) => (
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                {image}
            </div>
            <div className={classes.shade}>
                <div className={classes.block}>
                    {logo}
                </div>
                <Typography type="body" inverted>
                    {description}
                </Typography>
            </div>
        </div>
    )


export default injectSheet(styles)(CompanyImage);