import React from 'react';

import injectSheet from 'react-jss';
import styles from './styles';

// import cn from 'classnames';

import { Row, Col } from 'src/common/components/Grid';
import Icon from 'src/common/components/Icon';

import icons from './icons';



const Social = ({ classes }) => (
    <Row className={classes.wrapper}>
        {icons.map((icon, index) => (
            <Col xs={2} sm={1} key={`social_icon_${index}`}>
                <a
                    href={icon.href}
                    target="_blank"
                    className={classes.icon}
                >
                    <Icon name={icon.name} size={30} />
                </a>
            </Col>

        ))}
    </Row>
)


export default injectSheet(styles)(Social);