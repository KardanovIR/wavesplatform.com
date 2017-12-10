import React from 'react';

import injectSheet from 'react-jss';
import styles from './styles';

// import cn from 'classnames';

import { Row, Col } from 'src/common/components/Grid';
import Icon from 'src/common/components/Icon';
import Link from 'src/common/components/Link';

import icons from './icons';

const Social = ({ classes }) => (
  <Row className={classes.wrapper}>
    {icons.map((icon, index) => (
      <Col className={classes.col} sm key={`social_icon_${index}`}>
        <Link
          href={icon.href}
          target="_blank"
          icon={null}
          className={classes.icon}
          textDecoration={false}
          primary={false}
        >
          <Icon name={icon.name} size={20} />
        </Link>
      </Col>
    ))}
  </Row>
);

export default injectSheet(styles)(Social);
