import React from 'react';

import TitleTextCTA from 'src/common/components/TitleTextCTA';
import IconButton from 'src/common/components/Button/Icon';

import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';



const MainScreen = ({
    classes,
}) => (
        <Row>

            <Col xs={12} md={6} className={classes.titleTextCtaCol}>
                <TitleTextCTA
                    title="Build unstoppable applications"
                    text="These apps run on a custom built  blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property."
                    inverted
                    buttons={[
                        (
                            <IconButton
                                key="main_cta_button"
                                className={classes.ctaButton}
                                href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                                target="_blank"
                                iconName="github"
                                secondary
                            >
                                Documentation
                            </IconButton>
                        ),
                        (
                            <IconButton
                                key="main_cta_button2"
                                className={classes.secondCtaButton}
                                href="https://github.com/wavesplatform/WavesGUI"
                                target="_blank"
                                iconName="github"
                                bordered
                            >
                                Client
                            </IconButton>
                        )
                    ]}
                />
            </Col>

            <Col xs={12} md={6} className={classes.imageCol}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} />
                </div>
            </Col>

        </Row>
    );


export default injectSheet(styles)(MainScreen);