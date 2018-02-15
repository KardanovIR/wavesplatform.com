import React from 'react';

import { FormattedMessage } from 'react-intl';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Typography from 'src/common/components/Typography';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import ContentContainer from 'src/common/components/ContentContainer';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import Descriptions from './lib/Descriptions';
import News from './lib/News';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ classes }) => (
  <Layout>
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
        <Typography type="display1">
          <FormattedMessage id="wavesNG.fastest.title" />
        </Typography>
        <Typography type="body2">
          <FormattedMessage id="wavesNG.fastest.text1" />
        </Typography>
        <Typography type="body2">
          <FormattedMessage id="wavesNG.fastest.text2" />
        </Typography>
      </ContentContainer>
    </Section>

    <Section size={4}>
      <ContentContainer>
        <News />
      </ContentContainer>
    </Section>

    <Section size={4}>
      <ContentContainer>
        <Descriptions />
      </ContentContainer>
    </Section>

    <Section size={4} className={classes.bgJoinUs}>
      <ContentContainer>
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
