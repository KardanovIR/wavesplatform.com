import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';

// import AnchorScroll from 'src/public/components/AnchorScroll';

// lib
import MainScreen from './lib/MainScreen';
import Algorithms from './lib/Algorithms';
import StartMining from './lib/StartMining';
import Revenue from './lib/Revenue';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
const styles = theme => ({
    bgRevenue: { 
        background: '#f0f4fb'
    },
});

const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreenBackground type="dark">
            <MainScreen
                title={
                    <FormattedMessage
                        id="company.title"
                        defaultMessage="We create the economics of free, perfect and instant"
                    />
                }
                text={
                    <FormattedMessage
                        id="company.text"
                        defaultMessage="The Waves Platform is a global public blockchain platform, founded in 2016. Waves Platform’s mission is to reinvent the DNA of entrepreneurship around the world by providing a shared infrastructure, offering easy-to-use, highly functional tools to make blockchain available to every person or organisation that can benefit from it."
                    />
                }
            />
        </MainScreenBackground>

        <Section top={3} bottom={4}>
            <Algorithms />
        </Section>

        <Background className={classes.bgRevenue} skewed>
            <Section size={4}>
                <Revenue />
            </Section>
        </Background>

        <Section size={4}>
            <StartMining />
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
