import React from 'react';
import styles from './styles';

import injectSheet from 'react-jss';
import cn from 'classnames';

import Logo from 'src/common/components/Logo';


import { Row, Col } from 'src/common/components/Grid';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';

import Social from './lib/Social';
import FooterNav from './lib/FooterNav';



const Footer = ({ classes, links }) => (
    <div className={classes.root}>
        <Background className={cn(classes.background, classes.bgSkewed)} skewed wrapperClassName={classes.backgroundWrapper} />
        <Background className={cn(classes.background2, classes.bgSkewed)} skewed wrapperClassName={classes.backgroundWrapper} />
        <Background className={classes.background} skewed={false}>
            <footer className={classes.footer}>
                <Row className={classes.row}>
                    <Col xs={12} sm={12} md={5} className={classes.social}>
                        <Social />
                    </Col>
                    <Col xs={12} sm={12} md={6} className={classes.nav}>
                        <div className={classes.navWrapper}>
                            <FooterNav links={links} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} className={classes.language}>
                        <Typography type="body" className={classes.textGray}>
                            English
                        </Typography>
                    </Col>

                    <Col xs={12} md={6} className={classes.copyright}>
                        <Typography className={classes.textDarkGray} type="body">
                            © Waves Platform
                        </Typography>
                    </Col>

                    <Col xs={12} md={1} className={classes.logo}>
                        <a href="/" className={classes.logoLink}>
                            <Logo full={false} />
                        </a>
                    </Col>
                </Row>
            </footer>
        </Background>
    </div>
)


export default injectSheet(styles)(Footer);