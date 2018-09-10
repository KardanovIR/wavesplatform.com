import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const MultisigWallet = () => (
  <Col xs={12} sm={6}>
    <Margin bottom={3} xsOnly />
    <AvatarTitleText
      avatar={<IconProduct name="wallet" />}
      title={
        <FormattedMessage
          id="smartContracts.features.1.title"
          defaultMessage="Multisignature wallet"
        />
      }
      text={
        <FormattedHTMLMessage
          id="smartContracts.features.1.text"
          defaultMessage="Two-factor authentication<br/>Cannot be controlled by one person alone<br/>The necessary parties must provide their private keys simultaneously"
        />
      }
      inverted
    />
    <Margin bottom={5} />
    <br />
    <Margin bottom={3} xsOnly />
  </Col>
);
const AtomicSwap = () => (
  <Col xs={12} sm={6}>
    <AvatarTitleText
      avatar={<IconProduct name="atomicSwap" />}
      title={
        <FormattedMessage
          id="smartContracts.features.2.title"
          defaultMessage="Atomic swaps"
        />
      }
      text={
        <FormattedMessage
          id="smartContracts.features.2.text"
          defaultMessage="Trustless exchange of cryptocurrencies hosted on different blockchains"
        />
      }
      inverted
    />
    <Margin bottom={5} />
    <br />
    <Margin bottom={3} xsOnly />
  </Col>
);
const TokenFreeze = () => (
  <Col xs={12} sm={6}>
    <AvatarTitleText
      avatar={<IconProduct name="tokenFreeze" />}
      title={
        <FormattedMessage
          id="smartContracts.features.3.title"
          defaultMessage="Token Freeze"
        />
      }
      text={
        <FormattedMessage
          id="smartContracts.features.3.text"
          defaultMessage="Preventing buyers from selling or transferring tokens out of their address for a certain amount of time"
        />
      }
      inverted
    />
    <Margin bottom={5} />
    <br />
    <Margin bottom={3} xsOnly />
  </Col>
);

const DecentralizedApps = () => (
  <Col xs={12} sm={6}>
    <AvatarTitleText
      avatar={<IconProduct name="turingContracts" />}
      title={
        <FormattedMessage
          id="smartContracts.features.4.title"
          defaultMessage="Decentralised applications"
        />
      }
      text={
        <FormattedMessage
          id="smartContracts.features.4.text"
          defaultMessage="dApps based on Turing-complete smart contracts will be able to undertake complex processes on the blockchain according to a range of different conditions"
        />
      }
      inverted
    />
    <Margin bottom={5} />
    <br />
    <Margin bottom={3} xsOnly />
  </Col>
);

const SCFeatures = () => (
  <div>
    <Row>
      <Col xs={10} md={8} mdOffset={2}>
        <Typography type="display3" inverted align="center" alignMobile="left">
          <FormattedMessage
            id="smartContracts.features.title"
            defaultMessage="What Will Smart Contracts Bring to Waves?"
          />
        </Typography>
      </Col>
    </Row>
    <Margin bottom={6} />
    <Row>
      <MultisigWallet />
      <DecentralizedApps />
      <TokenFreeze />
      <AtomicSwap />
    </Row>
  </div>
);

export default SCFeatures;
