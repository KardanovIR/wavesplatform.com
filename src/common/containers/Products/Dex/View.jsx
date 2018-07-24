import React from 'react';
import cx from 'classnames';
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import { hot } from 'react-hot-loader';

// lib
import MainScreen from './lib/MainScreen';
import DEXTopPairs from './lib/DEXTopPairs';
import DEXFeatures from './lib/DEXFeatures';
import DEXOtherFeatures from './lib/DEXOtherFeatures';
import GetClient from './lib/GetClient';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({
  initialState,
  classes,
  onNewDexClick,
  onClientDownload,
  onNewClientClick,
}) => (
  <Layout inverted hideCredentials activeLink="dex">
    <BackgroundMainScreen type="image" src={require('./img/bg.jpg')}>
      <ContentContainer>
        <MainScreen onNewDexClick={onNewDexClick} />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4} bottom={4}>
        <ContentContainer>
          <DEXTopPairs pairs={initialState.pairs} />
        </ContentContainer>
      </Section>
      <Section
        top={4}
        bottom={4}
        className={cx(classes.bgBlack, classes.noOverflow)}
      >
        <DEXFeatures />
      </Section>
      <Section
        top={4}
        bottom={4}
        className={cx(classes.bgBlack, classes.noOverflow)}
      >
        <ContentContainer>
          <DEXOtherFeatures />
        </ContentContainer>
      </Section>
      <Section className={classes.bgMobileApp}>
        <ContentContainer>
          <GetClient
            onClientDownload={onClientDownload}
            onNewClientClick={onNewClientClick}
          />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);
const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default hot(module)(App);
