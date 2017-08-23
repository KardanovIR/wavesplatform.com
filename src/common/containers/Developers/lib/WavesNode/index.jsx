import React from 'react';

import Typography from 'src/common/components/Typography';
import IconButton from 'src/common/components/Button/Icon';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

const consoleImageSrc = require('!svg-url-loader?noquotes!./img/console.svg');


import injectSheet from 'react-jss';



const styles = theme => ({
    image: {
        maxWidth: '100%'
    },
    buttonWrapper: {
        marginBottom: theme.spacing.unit * 2,
    },
    [theme.mixins.atMedia('md')]: {
        buttonWrapper: {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: theme.spacing.unit * 2,
        },
        text: {
            paddingRight: theme.spacing.unit * 4,
            textAlign: 'right'
        },
        mdAlignCenter: {
            textAlign: 'center'
        }
    }
})


const FriendlyAPI = ({ classes }) => (
    <div>
        <Row centered>
            <Col xs={12} md={8} lg={7}>
                <Typography type="display2" className={classes.mdAlignCenter}>
                    Running Waves Node
                </Typography>
                <Typography type="body2" className={classes.mdAlignCenter}>
                    Having your own node will allow you to build your own secure and high-load applications on top of it.
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>

        <Row>
            <Col xs={12} md={6} lg={6} className={classes.text}>
                <Typography type="body">
                    It’s extremely easy to install and run your own instance of Waves Node. It allows you to mine Waves, act as leasing pool to aggregate mining power from other users and MRTs (Miners Reward Tokens).
                </Typography>

                <Margin bottom={2} />

                <div className={classes.buttonWrapper}>
                    <IconButton
                        href="https://github.com/wavesplatform/Waves"
                        target="_blank"
                        iconName="github"
                    >
                        Waves node
                </IconButton>
                </div>
                <div className={classes.buttonWrapper}>
                    <IconButton
                        href="https://github.com/wavesplatform/Waves/wiki/How-to-install-Waves-node"
                        target="_blank"
                        iconName="github"
                        secondary
                    >
                        How to install
                </IconButton>
                </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <img src={consoleImageSrc} alt="Console image" className={classes.image} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(FriendlyAPI);