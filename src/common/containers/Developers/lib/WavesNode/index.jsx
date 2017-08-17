import React from 'react';

import Typography from 'src/common/components/Typography';

import { Row, Col } from 'src/common/components/Grid';

import IconButton from 'src/common/components/Button/Icon';
import Margin from 'src/common/components/Margin';




import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} sm={6} md={5}>
            <div className={classes.imageWrapper}>
                <div className={classes.image} />
            </div>
        </Col>
        <Col xs={12} sm={6} md={7}>
            <Typography type="display2">
                Running Waves Node
            </Typography>
            <Typography type="body">
                It’s extremely easy to install and run your own instance of Waves Node. It allows you to mine Waves, act as leasing pool to aggregate mining power from other users and MRTs (Miners Reward Tokens).
            </Typography>
            <Typography type="body">
                Having your own node will allow you to build your own secure and high-load applications on top of it.
            </Typography>

            <Margin bottom={4} />

            <Margin bottom={3} right={1} className={classes.buttonWrapper}>
                <IconButton
                    href="https://github.com/wavesplatform/Waves"
                    target="_blank"
                    iconName="github"
                    color="gray-300"
                >
                    Waves Node
                </IconButton>
            </Margin>
            <Margin bottom={3} right={1} className={classes.buttonWrapper}>
                <IconButton
                    href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
                    target="_blank"
                    iconName="github"
                    color="gray-300"
                >
                    How to install
                </IconButton>
            </Margin>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);