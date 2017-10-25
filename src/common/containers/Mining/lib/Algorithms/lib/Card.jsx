import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Panel from 'src/common/components/Panel';
import Hidden from 'src/common/components/Hidden';
import Divider from 'src/common/components/Divider';

// import cn from 'classnames';

const styles = theme => ({
    [theme.mixins.atMedia('md')]: {
        wrapper: {
            height: '100%',
        },
    },
});

const Card = ({ classes, imageMobile, image, text, title }) => {
    // const wrapperClasses = cn(
    //     classes.avatarWrapper,
    //     {
    //         [classes.small]: small
    //     }
    // );

    return (
        <Panel className={classes.wrapper}>
            <Typography type="display1" tagName="div">
                {title}
            </Typography>
            <Margin bottom={3} />
            <Hidden smUp>{image}</Hidden>
            <Hidden smDown>{imageMobile}</Hidden>
            <Margin top={3} bottom={2}>
                <Divider />
            </Margin>
            <Typography type="body" tagName="div">
                {text}
            </Typography>
        </Panel>
    );
};

export default injectSheet(styles)(Card);
