import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import cn from 'classnames';



const styles = theme => ({
    avatarWrapper: {
        width: theme.spacing.unit * 7,
        height: theme.spacing.unit * 7,
    },
    small: {
        height: theme.spacing.unit * 5,
        width: theme.spacing.unit * 5,
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
        small: {
            height: theme.spacing.unit * 6,
            width: theme.spacing.unit * 6,
        },
    }
})



const AvatarWithText = ({
    classes,
    className,
    avatar,
    small,
    text,
    title
}) => {
    const wrapperClasses = cn(
        classes.avatarWrapper,
        {
            [classes.small]: small
        }
    );

    return (
        <div className={className}>
            <div className={wrapperClasses}>
                {avatar}
            </div>
            <Margin bottom={2} />
            <Typography type="display1" tagName="div" cut>
                {title}
            </Typography>
            <Typography type="body" tagName="div" cut>
                {text}
            </Typography>
        </div>
    )
}


AvatarWithText.defaultProps = {
    centered: false
}


export default injectSheet(styles)(AvatarWithText);