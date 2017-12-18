import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';

import AnchorScroll from 'src/public/components/AnchorScroll';

// lib
import MainScreen from './lib/MainScreen';
import Description from './lib/Description';
import StartLeasing from './lib/StartLeasing';
import Revenue from './lib/Revenue';
import Nodes from './lib/Nodes';

import injectSheet from 'react-jss';
const styles = theme => ({
  bgRevenue: {
    background: '#f0f4fb',
  },
  bgNodes: {
    background: theme.palette.gray[50],
  },
});

const PageLayout = ({ classes }) => (
  <Layout>
    <MainScreenBackground type="dark">
      <MainScreen />
    </MainScreenBackground>

    <Section top={3} bottom={4}>
      <Description />
    </Section>

    <Background className={classes.bgRevenue} skewed>
      <Section size={4}>
        <Revenue />
      </Section>
    </Background>

    <Section size={4}>
      <StartLeasing />
    </Section>

    <Background className={classes.bgNodes} skewed>
      <Section size={4}>
        <AnchorScroll anchor="nodes">
          <Nodes />
        </AnchorScroll>
      </Section>
    </Background>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
