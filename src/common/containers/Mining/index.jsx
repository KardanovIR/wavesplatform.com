import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';
import ContentContainer from 'src/common/components/ContentContainer';

// import AnchorScroll from 'src/public/components/AnchorScroll';

// lib
import MainScreen from './lib/MainScreen';
import Algorithms from './lib/Algorithms';
import StartMining from './lib/StartMining';
import Revenue from './lib/Revenue';
import WavesNodesMap from './lib/WavesNodesMap';
import Nodes from './lib/Nodes';

import injectSheet from 'react-jss';
const styles = theme => ({
    bgRevenue: {
        background: '#d6e0fc',
    },
    bgNodes: {
        background: theme.palette.gray[1000],
    }
});

const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreenBackground
            type="image"
            src={require('./lib/MainScreen/img/bg.jpg')}
            srcSet={`${require('./lib/MainScreen/img/bg.jpg')} 1x, ${require('./lib/MainScreen/img/bg@2x.jpg')} 2x`}
            videoSrc={require('./lib/MainScreen/video/w_black_dev_1.mp4')}
            videoSrcMobile={require('./lib/MainScreen/video/w_phone_black_1.mp4')}
        >
            <ContentContainer>
                <MainScreen />
            </ContentContainer>
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

        <Background className={classes.bgNodes} skewed>
            <Section top={2}>
                <WavesNodesMap />
            </Section>
        </Background>
        <Section size={2} top={4} bottom={4}>
            <Nodes />
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
