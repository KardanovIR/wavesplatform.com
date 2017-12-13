import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import media from './media.json';

const Media = ({ classes }) => (
  <div className={classes.root}>
    <Row>
      <Col xs={12} style={{ padding: 0 }}>
        <Typography type="display2" align="left" style={{ fontSize: 23 }}>
          <FormattedMessage id="company.media.title" defaultMessage="Media" />
        </Typography>
        <Margin bottom={1} />
      </Col>
    </Row>
    <Row>
      {media.map((contact, index) => (
        <Col key={`media_org_${index}`} style={{ padding: 0 }} xs={4} sm={4} md={4}>
          <a href={contact.url} target="_blank" className={classes.link}>
            <Panel className={classes.media}>
              <img src={contact.logo} className={classes.logo} alt="Media contact" />
            </Panel>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default injectSheet(styles)(Media);
