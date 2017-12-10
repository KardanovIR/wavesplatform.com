import React from 'react';
import cx from 'classnames';

import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import url from 'src/common/utils/url';

const Interest = ({ classes }) => (
  <Row className={classes.row}>
    <Col xs={12} md={6} className={cx(classes.column, classes.columnGray)}>
      <div className={classes.panel}>
        <div>
          <Typography type="display1" inverted>
            <FormattedMessage id="product.interest.leasing.title" defaultMessage="Leasing" />
          </Typography>
          <Typography type="body2" inverted>
            <FormattedMessage
              id="product.interest.leasing.text"
              defaultMessage="Any sum of Waves can be leased to miners to generate interest. You can refund at any time in 2 clicks."
            />
          </Typography>

        </div>

        <Typography type="display1" inverted className={classes.linkContainer}>
          <Link href={url('leasing')} textDecoration={false} className={classes.link} inverted>
            <FormattedMessage id="product.interest.link" defaultMessage="Learn more" />
          </Link>
        </Typography>
      </div>
    </Col>

    <Col xs={12} md={6} className={cx(classes.column, classes.columnBlue)}>
      <div className={classes.panel}>
        <div>
          <Typography type="display1" inverted>
            <FormattedMessage id="product.interest.mining.title" defaultMessage="Mining" />
          </Typography>
          <Typography type="body2" inverted>
            <FormattedMessage
              id="product.interest.mining.text"
              defaultMessage="Waves uses a proof-of-stake algorithm. To start mining, all you need to do is to download and launch the node, and have 10,000 WAVES in your wallet."
            />
          </Typography>

        </div>

        <Typography type="display1" inverted className={classes.linkContainer}>
          <Link href={url('mining')} inverted textDecoration={false} className={classes.link}>
            <FormattedMessage id="product.interest.link" defaultMessage="Learn more" />
          </Link>
        </Typography>
      </div>
    </Col>
  </Row>
);

export default injectSheet(styles)(Interest);
