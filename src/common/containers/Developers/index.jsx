import React from 'react';
import cx from 'classnames';
// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Margin from 'src/common/components/Margin';
import Background from 'src/common/components/Background';
import ContentContainer from 'src/common/components/ContentContainer';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';

// lib
import MainScreen from './lib/MainScreen';
import FriendlyAPI from './lib/FriendlyAPI';
import WavesNode from './lib/WavesNode';
import DEX from './lib/DEX';
import WavesNetwork from './lib/WavesNetwork';
import WavesEcosystem from './lib/WavesEcosystem';
import Description from './lib/Description';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ classes }) => (
  <Layout activeLink="developers" inverted>
    <BackgroundMainScreen
      type="image"
      src={require('./lib/MainScreen/img/bg.jpg')}
      srcSet={`${require('./lib/MainScreen/img/bg.jpg')} 1x, ${require('./lib/MainScreen/img/bg@2x.jpg')} 2x`}
      videoSrc={fileUrl('video/black_desktop.mp4')}
      videoSrcMobile={fileUrl('video/black_mobile.mp4')}
      videoFirstFrame={require('./lib/MainScreen/img/w_black_dev_1.jpg')}
      videoFirstFrameMobile={require('./lib/MainScreen/img/w_phone_black_1.jpg')}
    >
      <ContentContainer>
        <MainScreen inverted />
      </ContentContainer>
    </BackgroundMainScreen>

    <Section top={3} bottom={1} className={classes.bgDark}>
      <ContentContainer>
        <Description />
      </ContentContainer>
    </Section>

    <Section size={3} className={classes.bgFriendly}>
      <ContentContainer>
        <FriendlyAPI />
      </ContentContainer>
    </Section>

    <Section size={3} className={classes.bgBlack}>
      <ContentContainer>
        <WavesNode />
      </ContentContainer>
    </Section>

    <Section size={3} className={cx(classes.bgDarker, classes.bgDEX)}>
      <ContentContainer className={classes.bgDEX}>
        <DEX />
      </ContentContainer>
    </Section>

    <Section size={3} className={classes.bgDark}>
      <ContentContainer>
        <WavesNetwork />
      </ContentContainer>
    </Section>

    <Section top={2} bottom={4} className={classes.bgBlack}>
      <ContentContainer>
        <WavesEcosystem />
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
