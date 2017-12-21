import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';

const News = () => {
  return (
    <Row>
      <Col xs={12} sm={4} smOffset={1}>
        <Typography type="display2" align="center">
          <Link
            textDecoration={false}
            target="_blank"
            href="https://wavescommunity.com"
            inverted
          >
            <FormattedMessage id="wavesNG.news.1" />
          </Link>
        </Typography>
        <Margin bottom={4} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <Typography type="display2" align="center">
          <Link
            textDecoration={false}
            target="_blank"
            href="https://wavescommunity.com"
            inverted
          >
            <FormattedMessage id="wavesNG.news.2" />
          </Link>
        </Typography>
        <Margin bottom={4} xsOnly />
      </Col>
    </Row>
  );
};

export default News;
