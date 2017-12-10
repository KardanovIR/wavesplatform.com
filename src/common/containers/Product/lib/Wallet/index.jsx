import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Wallet = ({classes}) => (
  <div>
    <Row>
      <Col xs={12}>
        <Typography type="display1">
          <FormattedMessage
            id="product.wallet.createWallet.title"
            defaultMessage="Create a multiple-currency wallet"
          />
        </Typography>

        <Typography type="body2">
          <FormattedMessage
            id="product.wallet.createWallet.text"
            defaultMessage="In addition to Waves tokens, thousands of other kinds of tokens have also been released on the platform, many of which have gone through an ICO and have huge potential. We support fiat money ($, €) as well as cryptocurrencies such as bitcoin, ethereum, ethereum classic, and more. The list is constantly expanding."
          />
        </Typography>
      </Col>
    </Row>
    <img
      className={classes.image}
      src={require('../../img/wallet.jpg')}
      srcSet={`${require('../../img/wallet.jpg')} 1x, ${require('../../img/wallet@2x.jpg')} 2x`}
      alt=""
    />
    <Row>
      <Col xs={12} md={6}>
        <AvatarTitleText
          twoColumns
          avatar={<IconProduct name="transaction" />}
          title={
            <FormattedMessage
              id="product.wallet.transfer.title"
              defaultMessage="Transfer funds from person to person"
            />
          }
          text={
            <FormattedMessage
              id="product.wallet.transfer.text"
              defaultMessage="Waves has a high network speed with hundreds of transactions per second and a small commission, which makes it as convenient as possible to transfer cryptocurrency between network members instantly."
            />
          }
        />
        <Margin bottom={5} xsOnly />
      </Col>
      <Col xs={12} md={6}>
        <AvatarTitleText
          twoColumns
          avatar={<IconProduct name="shield" />}
          title={
            <FormattedMessage
              id="product.wallet.security.title"
              defaultMessage="Take advantage of our platform’s high security"
            />
          }
          text={
            <FormattedMessage
              id="product.wallet.security.text"
              defaultMessage="Your balance is stored on a blockchain that only you can access. Only you can manage your crypto assets. Your tokens are stored on a blockchain that only you can access."
            />
          }
        />
      </Col>
    </Row>
  </div>
);

export default injectSheet(styles)(Wallet);
