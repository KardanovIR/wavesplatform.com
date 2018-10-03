import React from 'react';
import cx from 'classnames';

// components
import Layout from 'src/common/components/Layout';
import Typography from 'src/common/components/Typography';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';

import AnchorScroll from 'src/public/components/AnchorScroll';

// containers
import UserCases from 'src/common/components/UserCases';
import HowToWallet from 'src/common/components/HowToWallet';
import Facts from 'src/common/containers/Facts';

// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import Interest from './lib/Interest';
import MobileWallet from './lib/MobileWallet';
import HowToToken from './lib/HowToToken';
import IssuingTokens from './lib/IssuingTokens';

// DEX blocks
import DEXFeatures from 'src/common/containers/Products/Dex/lib/DEXFeatures';
import DEXOtherFeatures from 'src/common/containers/Products/Dex/lib/DEXOtherFeatures';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ classes }) => (
  <Layout activeLink="product">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
      videoSrc={fileUrl('video/white2_desktop.mp4')}
      videoSrcMobile={fileUrl('video/white2_mobile.mp4')}
      videoFirstFrame={require('./img/bgDesktopFF.jpg')}
      videoFirstFrameMobile={require('./img/bgMobileFF.jpg')}
    >
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={3} bottom={2}>
        <AnchorScroll anchor="wallet">
          <ContentContainer>
            <Wallet />
          </ContentContainer>
        </AnchorScroll>
      </Section>

      <Section top={1}>
        <ContentContainer>
          <Interest />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={4}>
        <ContentContainer>
          <MobileWallet />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={2} className={classes.bgGray}>
        <ContentContainer>
          <HowToWallet
            title={<FormattedMessage id="product.howToWallet.title" />}
            eventPage="Product"
            eventSource="HowToWallet"
          />
        </ContentContainer>
      </Section>

      <Section
        top={4}
        bottom={2}
        className={cx(classes.bgBlack, classes.section)}
      >
        <AnchorScroll anchor="dex">
          <ContentContainer>
            <DEXFeatures />
            <Margin bottom={4} />
            <DEXOtherFeatures />
          </ContentContainer>
        </AnchorScroll>
      </Section>

      <Section top={4} bottom={3}>
        <AnchorScroll anchor="token-launcher">
          <ContentContainer>
            <IssuingTokens />
          </ContentContainer>
        </AnchorScroll>
      </Section>

      <Margin top={5} bottom={5}>
        <ContentContainer>
          <Typography type="display3" weight={600}>
            <FormattedMessage id="feedback.companiesReleased" />
          </Typography>
        </ContentContainer>
      </Margin>

      <ContentContainer>
        <UserCases />
      </ContentContainer>

      <Section size={4}>
        <ContentContainer>
          <Facts />
        </ContentContainer>
      </Section>

      <Section top={2} bottom={4} className={classes.bgBlue}>
        <ContentContainer>
          <HowToToken />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const App = injectSheet(styles)(PageLayout);
export default App;
