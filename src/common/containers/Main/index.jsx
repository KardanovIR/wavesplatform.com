import React from 'react';
import cx from 'classnames';

// components
import Layout from 'src/common/components/Layout';
import Wrapper from 'src/common/components/Wrapper';
import ContentContainer from 'src/common/components/ContentContainer';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';
import DEXFeatures from 'src/common/containers/Products/Dex/lib/DEXFeatures';

// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from '../../components/Wallet';
import WalletText from './lib/WalletText';
import WavesNG from './lib/WavesNG';
import IssuingTokens from './lib/IssuingTokens';
import JoinUs from './lib/JoinUs';
import Audience from './lib/Audience';
import UserCases from '../../components/UserCases';
import Facts from './lib/Facts';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';
import { hot } from 'react-hot-loader';

const PageLayout = ({ classes }) => (
  <Layout activeLink="home">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
      videoSrc={fileUrl('video/white_desktop.mp4')}
      videoSrcMobile={fileUrl('video/white_mobile.mp4')}
      videoFirstFrame={require('./img/bgDesktopFF.jpg')}
      videoFirstFrameMobile={require('./img/bgMobileFF.jpg')}
    >
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={3} bottom={2}>
        <ContentContainer>
          <NumbersQuote />
        </ContentContainer>
      </Section>

      <Section bottom={2}>
        <ContentContainer>
          <Audience />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={1} className={classes.bgWallet}>
        <ContentContainer>
          <WavesNG />
        </ContentContainer>
      </Section>

      <Section size={4} className={classes.bgBlack}>
        <ContentContainer>
          <WavesClient />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={1} className={classes.bgWallet}>
        <ContentContainer>
          <Wallet>
            <WalletText />
          </Wallet>
        </ContentContainer>
      </Section>

      <Section
        top={4}
        bottom={4}
        className={cx(classes.bgBlack, classes.overflowHidden)}
      >
        <DEXFeatures />
      </Section>

      <Section top={4} className={classes.issuingTokens}>
        <ContentContainer>
          <IssuingTokens />
        </ContentContainer>
      </Section>

      <ContentContainer>
        <UserCases />
      </ContentContainer>

      <Section size={4}>
        <ContentContainer>
          <Facts />
        </ContentContainer>
      </Section>

      <Section top={2} bottom={1} className={classes.bgJoinUs}>
        <ContentContainer>
          <JoinUs />
          <Margin bottom={5} />
          <br />
          <Margin top={5} />
          <SubscribeSection />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const App = injectSheet(styles)(PageLayout);
export default hot(module)(App);
