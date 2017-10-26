import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Quote from 'src/common/components/Quote';

import Image from './lib/Image';

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
    <Row>
        <Col xs={12} sm={6} className={classes.imageCol}>
            <Image
                image={image}
                logo={logo}
                description={description}
                website={website}
            />
        </Col>
        <Col xs={12} sm={6}>
            <Typography type="display1" cut>
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
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

    signature: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    website: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    avatar: PropTypes.node,
};


export default injectSheet(styles)(Feedback);