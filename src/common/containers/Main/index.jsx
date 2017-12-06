import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Wrapper from 'src/common/components/Wrapper';
import Background from 'src/common/components/Background';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';

// containers
import Feedback from 'src/common/containers/Feedback';
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from './lib/Wallet';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Audience from './lib/Audience';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ initialState, classes }) => (
  <Layout activeLink="home">
    <BackgroundMainScreen type="image" src={require('./img/bg.jpg')} srcSet={`${require('./img/bg@0.5x.jpg')} 640w, ${require('./img/bg.jpg')} 1280w, ${require('./img/bg@2x.jpg')} 1600w`}>
      <MainScreen />
    </BackgroundMainScreen>

    <Wrapper>
      <Section size={2}>
        <NumbersQuote dexData={initialState.dexData} />
      </Section>

      <Section bottom={2}>
        <Audience />
      </Section>

      <Background>
        <Section size={2}>
          <WavesClient />
        </Section>
      </Background>

      <Section size={2}>
        <Wallet />
      </Section>

      <Section top={2} bottom={4}>
        <DEX />
      </Section>

      <Background className={classes.bgTokens}>
        <div className={classes.sectionWide}>
          <IssuingTokens />
          <Margin bottom={5} />
          <Feedback>
            <Facts tokens={initialState.dexData.dexAssets} />
          </Feedback>
        </div>
      </Background>

      <Background className={classes.bgFeatures}>
        <div className={classes.withBackground}>
          <PlannedFeatures />
        </div>
      </Background>

      <Section size={4}>
        <JoinUs />
      </Section>

      <Background className={classes.bgSubscription}>
        <SubscribeSection />
      </Background>
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
