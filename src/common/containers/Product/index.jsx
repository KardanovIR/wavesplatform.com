import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';
import Divider from 'src/common/components/Divider';

import AnchorScroll from 'src/public/components/AnchorScroll';

import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
// import MainScreen from 'src/common/components/MainScreen';

// containers
import Feedback from 'src/common/containers/Feedback';

// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import Interest from './lib/Interest';
import MobileWallet from './lib/MobileWallet';
// import OnlineWallet from './lib/OnlineWallet';
import HowToWallet from './lib/HowToWallet';
import HowToTrade from './lib/HowToTrade';
import HowToToken from './lib/HowToToken';
import IssuingTokens from './lib/IssuingTokens';

// DEX blocks
import DEX from './lib/DEX';
import DEXFeatures from './lib/DEXFeatures';
import DEXTopPairs from './lib/DEXTopPairs';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ classes, initialState }) => (
    <Layout activeLink="product">
        <BackgroundMainScreen type="light">
            <MainScreen />
        </BackgroundMainScreen>

        <Section top={3} bottom={2}>
            <AnchorScroll anchor="wallet">
                <Wallet />
            </AnchorScroll>
        </Section>

        <Section top={1} bottom={4}>
            <Interest />
        </Section>

        <Background className={classes.bgWallet} skewed={true}>
            <Section size={4}>
                <MobileWallet />
            </Section>
        </Background>

        {/* <Section size={4}>
            <OnlineWallet />
        </Section> */}

        <Section size={4}>
            <HowToWallet />
        </Section>

        <Background className={classes.bgDex} skewed={true}>
            <Section size={4}>
                <AnchorScroll anchor="dex">
                    <DEX dexData={initialState.dexData} />
                </AnchorScroll>
            </Section>
        </Background>

        <Row>
            <Col xs={12} md={8}>
                <DEXFeatures />
            </Col>
            <Col xs={12} md={4}>
                <DEXTopPairs pairs={initialState.dexTopPairs} />
                <Margin bottom={4} />
            </Col>
        </Row>

        <Margin bottom={4} />
        <Divider gradient />

        <Section size={4}>
            <HowToTrade />
        </Section>

        <Background className={classes.bgTokens} skewed={true}>
            <Section top={4} bottom={2}>
                <AnchorScroll anchor="token-launcher">
                    <IssuingTokens />
                </AnchorScroll>
            </Section>
        </Background>

        <Typography type="quote" align="center">
            <FormattedMessage
                id="feedback.companiesReleased"
                defaultMessage="Companies that have released their own tokens on Waves:"
            />
        </Typography>

        <div className={classes.section}>
            <Feedback>
                <Facts tokens={initialState.dexData.dexAssets} />
            </Feedback>
        </div>

        <Margin bottom={4} />
        <Divider gradient />
        <Margin bottom={2} />

        <div className={classes.section}>
            <HowToToken />
        </div>
    </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
    <ThemeProvider>
        <Page {...props} />
    </ThemeProvider>
);

export default App;
