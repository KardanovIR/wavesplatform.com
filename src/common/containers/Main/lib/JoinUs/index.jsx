import React from 'react';


import BlockQuote from 'src/common/components/BlockQuote';
import Article from 'src/common/components/Article';
import Link from 'src/common/components/Link';
import Icon from 'src/common/components/Icon';
// import AvatarWithText from 'src/common/components/AvatarWithText';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} sm={6} smOffset={1} className={classes.article}>
            <Article
                title="Join the Waves Community"
                text="Waves brings together blockchain enthusiasts, project founders from all sorts of sectors, traders, investors, and anyone who is interested in staying on the cutting edge of the crypto-world."
            />
            <div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon name="hamburger" size={24} color="gray-0" />
                </div>
            </div>
        </Col>
        <Col xs={12} sm={4} smOffset={1}>
            <BlockQuote>
                Read the latest news and articles, and find out all about events happening on the Waves Platform, with our community-centered <Link target="_blank" href="https://wavescommunity.com">wavescommunity.com</Link>
            </BlockQuote>
        </Col>
    </Row>

);


export default injectSheet(styles)(MainScreen);