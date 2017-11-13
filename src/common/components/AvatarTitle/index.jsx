import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

const styles = theme => ({
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        height: theme.spacing.unit * 5,
        flex: [0, 0, `${theme.spacing.unit * 5}px`],
        marginRight: theme.spacing.unit * 2,
    },
});

const AvatarTitle = ({ classes, avatar, title, titleType }) => {
    return (
        <div className={classes.title}>
            <div className={classes.icon}>{avatar}</div>
            <Typography type={titleType}>{title}</Typography>
        </div>
    );
};

AvatarTitle.defaultProps = {
    titleType: 'display1',
};

export default injectSheet(styles)(AvatarTitle);
