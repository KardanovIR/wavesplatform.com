import React from 'react';


import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import AvatarWithText from 'src/common/components/AvatarWithText';
import WalletIcon from './Icon';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';



const ColFeature = ({ children, className }) =>
    <Col xs={12} md={4} lg className={className}>{children}</Col>;


const Wallet = ({ classes }) => (
    <div className={classes.root}>
        <Row centered>
            <Col xs={12} sm={6}>
                <Typography type="display2" align="center">
                    Wallet
                </Typography>
                <Typography type="body2" align="center">
                    Your balance is stored on a blockchain that only you can access. Only you can manage your crypto assets."
                </Typography>
                <Margin bottom={4} />
            </Col>
        </Row>
        <Row>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<WalletIcon name="secure" />}
                    text="Take advantage of our platform’s high security"
                    centered
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<WalletIcon name="interest" />}
                    text="Get interest on your Waves account balance"
                    centered
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<WalletIcon name="transfer" />}
                    text="Transfer funds from person to person"
                    centered
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<WalletIcon name="mining" />}
                    text="Start mining — it’s easy with Waves"
                    centered
                />
            </ColFeature>
            <ColFeature className={classes.feature}>
                <AvatarWithText
                    avatar={<WalletIcon name="wallet" />}
                    text="Create a multiple-currency wallet"
                    centered
                />
            </ColFeature>
        </Row>
    </div>
);


export default injectSheet(styles)(Wallet);