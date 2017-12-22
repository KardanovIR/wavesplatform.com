import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import ContentContainer from 'src/common/components/ContentContainer';

import AnchorScroll from 'src/public/components/AnchorScroll';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import StressTest from './lib/StressTest';
import Descriptions from './lib/Descriptions';
import Steps from './lib/Steps';
import News from './lib/News';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ classes }) => (
  <Layout hideSnackbar>
    <BackgroundMainScreen
      type="image"
      src={require('./lib/MainScreen/img/bg.jpg')}
      srcSet={`${require('./lib/MainScreen/img/bg.jpg')} 1x, ${require('./lib/MainScreen/img/bg@2x.jpg')} 2x`}
      videoSrc={fileUrl('video/black2_desktop.mp4')}
      videoSrcMobile={fileUrl('video/black2_mobile.mp4')}
      videoFirstFrame={require('./lib/MainScreen/img/w_black_dev_1.jpg')}
      videoFirstFrameMobile={require('./lib/MainScreen/img/w_phone_black_1.jpg')}
    >
      <ContentContainer>
        <MainScreen inverted />
      </ContentContainer>
    </BackgroundMainScreen>

    <Section size={4}>
      <ContentContainer>
        <Typography type="display3">
          <FormattedHTMLMessage
            id="wavesNG.stressTest.title"
            defaultMessage="Waves-NG<br>activation stages"
          />
        </Typography>
        <Margin bottom={4} />
        <Steps />
      </ContentContainer>
    </Section>

    <Section size={4} className={classes.bgGray}>
      <ContentContainer>
        <AnchorScroll anchor="stress-test">
          <StressTest active />
        </AnchorScroll>
      </ContentContainer>
    </Section>

    <Section size={4}>
      <ContentContainer>
        <Descriptions />
      </ContentContainer>
    </Section>

    <Section size={4} className={classes.bgJoinUs}>
      <ContentContainer>
        <News />
				<Margin bottom={5} />
        <SubscribeSection />
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
