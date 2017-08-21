import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import Image from './lib/Image';
import Quote from './lib/Quote';


import injectSheet from 'react-jss';
import styles from './styles';




const Feedback = ({
    classes,
    image,
    logo,
    description,
    website,
    title,
    quote,
    signature,
    avatar
}) => (
    <Row className={classes.root}>
        <Col xs={12} sm={6} className={classes.imageCol}>
            <Image
                image={image}
                logo={logo}
                description={description}
                website={website}
            />
            <br />
        </Col>
        <Col xs={12} sm={6}>
            <Typography type="display2">
                {title}
            </Typography>
            <br />
            <Quote
                avatar={avatar}
                signature={signature}
            >
                {quote}
            </Quote>
        </Col>
    </Row>
);

Feedback.propTypes = {
    image: PropTypes.node.isRequired,
    logo: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,

    signature: PropTypes.string,
    website: PropTypes.string,
    avatar: PropTypes.node,
};


export default injectSheet(styles)(Feedback);