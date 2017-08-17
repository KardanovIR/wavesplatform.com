import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';



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
import Feedback from './lib/Feedback';
import Facts from './lib/Facts';



// styles
import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    padded: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    backgroundColor: {
        background: theme.palette.gray[50]
    },
    backgroundGradient: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
    },
    centered: {
        textAlign: 'center'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0), ${theme.palette.gray[300]} 50%, rgba(255,255,255,0));`
    },
})


const PageLayout = ({ classes, initialState }) => (
    <Layout>
        <MainScreen />
        <Wallet />

        <Interest />

        <MobileWallet />
        <OnlineWallet />

        <Background className={cn(classes.backgroundGradient, classes.padded)}>
            <HowToBlock
                title="How do I start using my Waves wallet?"
                steps={[
                    {
                        avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                        text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                    },
                    {
                        avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                        text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                    },
                    {
                        avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                        text: "You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
                    },
                ]}
                quote={<span>To complete your first operation on the DEX, you need 0.003 Waves, which you can buy directly with $ or €, or get them for free on the <Link href="#">Waves faucet.</Link></span>}
             />
        </Background>


        <Background className={cn(classes.backgroundColor, classes.padded)}>
            <DEX />

            <Margin bottom={4} />
            <div className={classes.divider} />
            <Margin bottom={3} />

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
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                    text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                },
                {
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                    text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                },
                {
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
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
            
            <Feedback
                image={<div style={{ height: '100%', background: 'lightblue' }} />}
                logo={<div style={{ height: 20, width: 100, background: 'red' }} />}
                description="Worldwide coworking spaces for Tech Community"
                website="primalbase.com"
                title="Primalbase crowdsale ends after one day and over 3 000 BTC raised"
                quote="We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants"
                signature="Primalbase Team"
                avatar={<div style={{ height: 90, background: 'red' }} />}
            />
            <Facts />
            <Feedback
                image={<div style={{ height: '100%', background: 'lightgreen' }} />}
                logo={<div style={{ height: 20, width: 100, background: 'lightgreen' }} />}
                description="The Crypto-Centric Mobile Gaming Platform and Store"
                website="mobilego.io"
                title="MobileGo becomes largest blockchain crowdsale in history!"
                quote="	There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution. Modern advances with the LCD computer monitors have changed"
                signature="MobileGo Team"
                avatar={<div style={{ height: 90, background: 'green' }} />}
            />

            <Margin bottom={4} />
        </Background>


        <HowToBlock
            title="How do I release my own tokens on Waves?"
            steps={[
                {
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                    text: <span>First, <Link href="/get-client">download</Link> and install the Waves client.</span>
                },
                {
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
                    text: "Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
                },
                {
                    avatar: <div style={{height: '100%', background: 'lightcyan'}} />,
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