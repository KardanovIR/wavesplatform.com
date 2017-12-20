import React from 'react';

import { FormattedMessage } from 'react-intl';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';

import AnchorScroll from 'src/public/components/AnchorScroll';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import StressTest from './lib/StressTest';
import Descriptions from './lib/Descriptions';
import Steps from './lib/Steps';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

import WavesNgLogo from '!svg-react-loader!./img/ng-logo.svg';

const PageLayout = ({ classes }) => (
  <Layout>
    <MainScreenBackground type="dark">
      <MainScreen />
    </MainScreenBackground>

    <Section top={3}>
      <Typography type="display3" align="center">
        <FormattedMessage
          id="wavesNG.stressTest.title"
          values={{
            logo: (
              <span className={classes.logo}>
                <WavesNgLogo />
              </span>
            ),
          }}
        />
      </Typography>
      <Margin bottom={4} />
      <Steps />
    </Section>

    <Section top={2} bottom={4}>
      <AnchorScroll anchor="stress-test">
        <StressTest active />
      </AnchorScroll>
    </Section>

    <Background className={classes.bgDescriptions} skewed={true}>
      <Section size={4}>
        <Descriptions />
      </Section>
    </Background>

    <div className={classes.footerMarginCompensate}>
      <Background className={classes.bgSubscription} skewed={true}>
        <SubscribeSection />
      </Background>
    </div>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
