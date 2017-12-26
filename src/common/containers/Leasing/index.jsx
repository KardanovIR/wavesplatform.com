import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';

import AnchorScroll from 'src/public/components/AnchorScroll';
import { fileUrl } from 'src/common/utils/url';

// lib
import MainScreen from './lib/MainScreen';
import Description from './lib/Description';
import StartLeasing from './lib/StartLeasing';
import Revenue from './lib/Revenue';
import Nodes from './lib/Nodes';

import injectSheet from 'react-jss';
const styles = theme => ({
    bgRevenue: {
        background: '#d6e0fc',
    },
    bgNodes: {
        background: theme.palette.gray[50],
    },
});

const PageLayout = ({ classes }) => (
    <Layout activeLink="leasing">
        <MainScreenBackground
            type="image"
            src={require('./img/w_black_d_1.jpg')}
            srcSet={`${require('./img/w_black_d_1.jpg')} 1x, ${require('./img/w_black_d_2.jpg')} 2x`}
            videoSrc={fileUrl('video/w_black_d_1.mp4')}
            videoSrcMobile={fileUrl('video/w_black_m_1.mp4')}
            videoFirstFrame={require('./img/w_black_d_1.jpg')}
            videoFirstFrameMobile={require('./img/w_black_m_1.jpg')}

        >
            <MainScreen inverted />
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
