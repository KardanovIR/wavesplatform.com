import React from 'react';

import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';
import Link from 'src/common/components/Link';
import { FormattedMessage } from 'react-intl';

const ResearchLink = () => (
  <Link href="http://blockchaininstitute.io/#grant-2">
    <FormattedMessage
      id="smartContracts.features.2.link"
      defaultMessage="research"
    />
  </Link>
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
            <FormattedMessage
              id="smartContracts.features.1.text"
              defaultMessage="Multisignature wallets cannot be controlled by one person alone. In order to make a transaction, the necessary parties must provide their private keys simultaneously. Two-factor authentication will also be introduced (e.g. private key + hardware device/second private key)."
            />
          }
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
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
              defaultMessage="Atomic swaps will allow parties to exchange cryptocurrencies hosted on different blockchains trustlessly. Preparations for implementing atomic swap functionality are in development on the Waves platform, with the right {link} teams being sought. Integration of atomic swaps will allow ERC-20 tokens to be traded on the Waves DEX, amongst other use cases."
              values={{ link: <ResearchLink /> }}
            />
          }
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
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
              defaultMessage="Using Waves smart contract functionality, you’ll be able to introduce a parameter that prevents buyers from selling or transferring tokens out of their address for a certain amount of time, thus ‘freezing’ the token. This parameter can be applied to any type of transaction."
            />
          }
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
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
              defaultMessage="Decentralised applications based on Turing-complete smart contracts will be able to undertake complex processes on the blockchain according to a range of different conditions."
            />
          }
          inverted
        />
        <Margin bottom={5} />
        <br />
        <Margin bottom={3} xsOnly />
      </Col>
    </Row>
  </div>
);

export default SCFeatures;
