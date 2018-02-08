import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import ContentContainer from 'src/common/components/ContentContainer';
import HowToWallet from 'src/common/components/HowToWallet';

// lib
import MainScreen from './lib/MainScreen';
import Exchanges from './lib/Exchanges';
import WalletText from './lib/WalletText';

// styles
import injectSheet from 'react-jss';
import styles from './styles';
import { fileUrl } from '../../utils/url';

const PageLayout = ({ classes }) => (
  <Layout activeLink="get-waves">
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

    <Section size={3}>
      <ContentContainer>
        <HowToWallet eventPage="GetWaves" eventSource="HowToWallet">
          <WalletText />
        </HowToWallet>
      </ContentContainer>
    </Section>

    <Section bottom={4}>
      <ContentContainer>
        <Exchanges />
      </ContentContainer>
    </Section>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
