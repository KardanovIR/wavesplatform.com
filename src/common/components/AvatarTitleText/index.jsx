import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';



const styles = theme => ({
    avatarWrapper: {
        width: theme.spacing.unit * 7,
        height: theme.spacing.unit * 7,
    },
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            flexWrap: 'wrap',
            justifyContent: ({ centered }) => centered ? 'center' : 'flex-start',
            textAlign: ({ centered }) => centered ? 'center' : 'auto'
        },
        avatarWrapper: {
            height: theme.spacing.unit * 10,
            width: theme.spacing.unit * 10,
        },
    }
})



const AvatarWithText = ({
    classes,
    className,
    avatar,
    text,
    title
}) => (
        <div className={className}>
            <div className={classes.avatarWrapper}>
                {avatar}
            </div>
            <Margin bottom={2} />
            <Typography type="display1" tagName="div">
                {title}
            </Typography>
            <Typography type="body" tagName="div">
                {text}
            </Typography>
        </div>
    )


AvatarWithText.defaultProps = {
    centered: false
}


export default injectSheet(styles)(AvatarWithText);