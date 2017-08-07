import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

import cn from 'classnames';



const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        // alignContent: 'center'
        alignItems: 'center'
    },
    avatarWrapper: {
        flex: `0 0 ${theme.spacing.unit*7}px`,
        height: theme.spacing.unit*7,

        margin: theme.spacing.getSpacing(0, 3, 0, 1),
        background: 'lightgrey',
        borderRadius: '50%'
    },
    textWrapper: {

    },

    [theme.mixins.atMedia('md')]: {
        wrapper: {
            flexWrap: 'wrap',
            justifyContent: ({ centered }) => centered ? 'center' : 'flex-start',
            textAlign: ({ centered }) => centered ? 'center' : 'auto'
        },
        avatarWrapper: {
            height: theme.spacing.unit*10,
            flexBasis: theme.spacing.unit*10,
            margin: theme.spacing.getSpacing(0, 0, 5, 0)
        }
    }
    
})



const AvatarWithText = ({
    classes,
    className,
    avatar,
    text
}) => (
    <div className={cn(classes.wrapper, className)}>
        <div className={classes.avatarWrapper}>
            { avatar }
        </div>
        <Typography type="body" tagName="div" className={classes.textWrapper}>
            { text }
        </Typography>
    </div>
)


AvatarWithText.defaultProps = {
    centered: false
}


export default injectSheet(styles)(AvatarWithText);