import React from 'react';

import Typography from 'src/common/components/Typography';
import AvatarWithText from 'src/common/components/AvatarWithText';
import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const IssuingTokens = ({ classes }) => (
    <div>
        <Row>
            <Col xs={12}>
                <Typography type="display2" className={classes.title}>
                    Issuing your tokens, token sales
                </Typography>
            </Col>
            <Col xs={12} sm={5} md={3}>
                <Typography type="body">
                    Cryptographically protected blockchain tokens allow any business to issue its own internal digital currency on the blockchain to pay for goods and services within its project. The actual cost of tokens (Custom Application Tokens) is established using open market mechanisms.
                </Typography>
                <Margin bottom={4} />
            </Col>
            <Col xs={12} smOffset={1} sm={5} md={3} mdOffset={1}>
                <Typography type="body">
                    The role of the released token is determined depending on the nature of each individual project and can be integrated into it not only as an internal currency but also as a token for decentralized voting or a rating system.
                </Typography>
                <Margin bottom={4} />
            </Col>
            <Col md={4} mdOffset={1}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} />
                </div>
            </Col>
        </Row>


        <Margin bottom={2} />

        <Row>
            <Col xs={12} sm={5}>
                <AvatarTitleText
                    avatar={<IconProduct name="target" circle />}
                    title="Raise funds for the development of your project"
                    text="By releasing blockchain tokens, you provide valuable services to network users, such as the possibility of transferring value in the form of certain conventional units, therefore attracting funds for the development of your project."
                />
                <Margin bottom={4} />
            </Col>
            <Col xs={12} smOffset={1} sm={5}>
                <AvatarTitleText
                    avatar={<IconProduct name="message" circle />}
                    title="Get loyal users of your product"
                    text="By holding an ICO not only do you receive money for development, but you also get loyal users of your product who believe in the project and are ready to become its first followers as well as give honest feedback."
                />
                <Margin bottom={4} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(IssuingTokens);