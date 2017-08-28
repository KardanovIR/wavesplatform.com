import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';



const MainScreen = ({
    title,
    text,
    imageDesktop,
    imageMobile,
    classes,
    buttons,
}) => (
        <Row className={classes.root}>
            <Col xs={12} sm={8} md={7} lg={6}>
                <Typography type="display4" inverted>{title}</Typography>
                <Margin />
            </Col>

            <Col xs={12} sm={4} md={5} lg={5} lgOffset={1} className={classes.imageCol}>
                {!!imageDesktop && (
                    <div className={classes.widthSetter}>
                        <div className={classes.imageWrapper}>
                            {!!imageMobile && (
                                <div className={cn(classes.image, classes.xsOnly)}>
                                    {imageMobile}
                                </div>
                            )}
                            <div className={cn(classes.image, { [classes.xsHidden]: imageMobile })}>
                                {imageDesktop}
                            </div>
                        </div>
                    </div>
                )}
            </Col>

            <Col xs={12} sm={8} md={7} lg={5}>
                <Typography type="body" inverted>
                    {text}
                </Typography>

                <Margin bottom={3} />

                {buttons.map((button, index) => (
                    <div className={classes.buttonWrapper} key={`main_cta_wrapper${index}`}>
                        {button}
                    </div>
                ))}
            </Col>
        </Row >
    );


MainScreen.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.node),
    imageDesktop: PropTypes.node,
    imageMobile: PropTypes.node,
};

export default injectSheet(styles)(MainScreen);