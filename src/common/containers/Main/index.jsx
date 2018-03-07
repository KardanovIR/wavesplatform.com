import React from 'react';
import cx from 'classnames';
import PopupTelegram from 'src/common/components/PopupTelegram';
// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Wrapper from 'src/common/components/Wrapper';
import ContentContainer from 'src/common/components/ContentContainer';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from '../../components/Wallet';
import WalletText from './lib/WalletText';
import WavesNG from './lib/WavesNG';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Audience from './lib/Audience';
import UserCases from '../../components/UserCases';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ initialState, classes }) => (
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
          <NumbersQuote dexData={initialState.dexData} />
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

      <Section top={4} className={cx(classes.bgBlack, classes.overflowHidden)}>
        <ContentContainer>
          <DEX />
        </ContentContainer>
      </Section>

      <Section top={5} className={classes.issuingTokens}>
        <ContentContainer>
          <IssuingTokens />
        </ContentContainer>
      </Section>

      <ContentContainer>
        <UserCases />
      </ContentContainer>

      <Section size={4}>
        <ContentContainer>
          <Facts tokens={initialState.dexData.dexAssets} />
        </ContentContainer>
      </Section>

      <Section size={2} className={classes.bgGray}>
        <ContentContainer>
          <PlannedFeatures />
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
      <PopupTelegram />
    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default App;
