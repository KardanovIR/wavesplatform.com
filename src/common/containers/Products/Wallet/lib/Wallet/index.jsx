import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Wallet = ({ classes }) => (
  <div>
    <Row>
      <Col xs={12} sm={6}>
        <AvatarTitleText
          twoColumns
          avatar={<IconProduct name="transaction" />}
          title={<FormattedMessage id="product.wallet.transfer.title" />}
          text={<FormattedMessage id="product.wallet.transfer.text" />}
        />
        <Margin bottom={5} xsOnly />
      </Col>
      <Col xs={12} sm={6}>
        <AvatarTitleText
          twoColumns
          avatar={<IconProduct name="shield" />}
          title={<FormattedMessage id="product.wallet.security.title" />}
          text={<FormattedMessage id="product.wallet.security.text" />}
        />
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Wallet);
