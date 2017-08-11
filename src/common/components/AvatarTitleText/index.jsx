import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import cn from 'classnames';



const styles = theme => ({
    // wrapper: {},
    avatarWrapper: {
        width: theme.spacing.unit * 5,
        height: theme.spacing.unit * 5,
        background: 'lightgrey',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            flexWrap: 'wrap',
            justifyContent: ({ centered }) => centered ? 'center' : 'flex-start',
            textAlign: ({ centered }) => centered ? 'center' : 'auto'
        },
        avatarWrapper: {
            height: theme.spacing.unit * 8,
            width: theme.spacing.unit * 8,
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
            <Margin bottom={3} />
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