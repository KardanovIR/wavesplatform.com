import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Facts from 'src/common/components/Facts';

// containers
import Feedback from 'src/common/containers/Feedback';


// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import Interest from './lib/Interest';
import MobileWallet from './lib/MobileWallet';
import OnlineWallet from './lib/OnlineWallet';
import HowToBlock from './lib/HowToBlock';

// DEX blocks
import DEX from './lib/DEX';
import DEXFeatures from './lib/DEXFeatures';
import DEXTopPairs from './lib/DEXTopPairs';

import IssuingTokens from './lib/IssuingTokens';



// styles
import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';



const PageLayout = ({ classes, initialState }) => (
    <Layout>
        <Background className={classes.bgMain}>
            <div className={classes.paddedBottom}>
                <MainScreen />
            </div>
        </Background>

        <div className={classes.section}>
            <Wallet />
        </div>
        
        <Interest />

        <MobileWallet />
        <OnlineWallet />

        <Background className={cn(classes.backgroundGradient, classes.padded)}>
            <HowToBlock
                title="How do I start using my Waves wallet?"
                steps={[
                    {
                        avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                        text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                    },
                    {
                        avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                        text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                    },
                    {
                        avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                        text: "You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
                    },
                ]}
                quote={<span>To complete your first operation on the DEX, you need 0.003 Waves, which you can buy directly with $ or €, or get them for free on the <Link href="#">Waves faucet.</Link></span>}
            />
        </Background>


        <Background className={cn(classes.backgroundColor, classes.padded)}>
            <DEX dexData={initialState.dexData} />

            <Margin bottom={5} />

            <Row>
                <Col xs={12} md={8}>
                    <DEXFeatures />
                </Col>
                <Col xs={12} md={4}>
                    <DEXTopPairs pairs={initialState.dexTopPairs} />
                    <Margin bottom={4} />
                </Col>
            </Row>

        </Background>


        <HowToBlock
            title="How do I start trading on the Waves DEX?"
            steps={[
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                },
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                },
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: "You will need to pay a small commission in Waves to trade any pairs, so buy Waves in advance."
                },
            ]}
            quote={<span>To complete your first operation on the DEX, you need 0.003 Waves, which you can buy directly with $ or €, or get them for free on the <Link href="#">Waves faucet.</Link></span>}
        />

        <Background className={cn(classes.backgroundColor, classes.padded)}>

            <IssuingTokens />

            <Margin bottom={2} />
            <div className={classes.divider} />
            <Margin bottom={4} />

            <Margin bottom={4}>
                <Typography
                    type="quote"
                    align="center"
                    color="gray-500"
                >
                    Companies that have released their own tokens on Waves:
                </Typography>
            </Margin>

            <div className={classes.section}>
                <Feedback>
                    <Facts tokens={initialState.dexData.dexAssets} />
                </Feedback>
            </div>

            <Margin bottom={4} />
        </Background>


        <HowToBlock
            title="How do I release my own tokens on Waves?"
            steps={[
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                },
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                },
                {
                    avatar: <div style={{ height: '100%', background: 'lightcyan' }} />,
                    text: "You will need to pay a small commission in Waves to trade any pairs, so buy Waves in advance."
                },
            ]}
            quote="After that, put the token on sale in the DEX tab at a price that will ensure that you achieve your project’s fundraising goals. You can create orders in several pairs if you want to accept different currencies, and you can even make them with different prices to create bonus conditions for the first investors."
        />
    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = props => (
    <ThemeProvider>
        <Page { ...props } />
    </ThemeProvider>
)



export default App;