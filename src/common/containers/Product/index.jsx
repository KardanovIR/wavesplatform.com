import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Facts from 'src/common/components/Facts';

// containers
import Feedback from 'src/common/containers/Feedback';


// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import Interest from './lib/Interest';
import MobileWallet from './lib/MobileWallet';
import OnlineWallet from './lib/OnlineWallet';
import HowToStart from './lib/HowToStart';

// DEX blocks
import DEX from './lib/DEX';
import DEXFeatures from './lib/DEXFeatures';
import DEXTopPairs from './lib/DEXTopPairs';

import IssuingTokens from './lib/IssuingTokens';



// styles
import injectSheet from 'react-jss';
import styles from './styles';



const PageLayout = ({ classes, initialState }) => (
    <Layout invertedNavigation>
        <Background className={classes.bgMain}>
            <div className={classes.paddedBottom}>
                <MainScreen />
            </div>
        </Background>

        <Background className={classes.bgInterest} skewed={true}>
            <Wallet />
            <div className={classes.section}>
                <Interest />
            </div>
        </Background>


        <div className={classes.sectionNarrow}>
            <MobileWallet />
        </div>

        <div className={classes.sectionNarrow}>
            <OnlineWallet />
        </div>


        <Background className={classes.bgHowToStart} skewed={true}>
            <div className={classes.section}>
                <HowToStart />
            </div>
        </Background>


        <Background className={classes.bgDex}>
            <div className={classes.sectionWide}>
                <DEX dexData={initialState.dexData} />
            </div>
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


        <div className={classes.section}>
            <HowToStart />
        </div>

        <div className={classes.section}>
            <IssuingTokens />
        </div>


        <Typography
            type="quote"
            align="center"
        >
            Companies that have released their own tokens on Waves:
        </Typography>

        <div className={classes.section}>
            <Feedback>
                <Facts tokens={initialState.dexData.dexAssets} />
            </Feedback>
        </div>

        <Margin bottom={4} />


        <Background className={classes.bgHowToStart} skewed={true}>
            <div className={classes.section}>
                <HowToStart />
            </div>
        </Background>

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = props => (
    <ThemeProvider>
        <Page { ...props } />
    </ThemeProvider>
)



export default App;