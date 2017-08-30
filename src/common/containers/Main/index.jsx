import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';


// containers
import Feedback from 'src/common/containers/Feedback';


// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from './lib/Wallet';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Subscribe from './lib/Subscribe';
import Audience from './lib/Audience';



// styles
import injectSheet from 'react-jss';
import styles from './styles';



const PageLayout = ({
    initialState,
    classes
}) => (
        <Layout activeLink="Home">

            <BackgroundMainScreen>
                <MainScreen />
            </BackgroundMainScreen>

            <Section size={2}>
                <NumbersQuote dexData={initialState.dexData} />
            </Section>

            <Section bottom={3}>
                <Audience />
            </Section>

            <Background className={classes.bgClient} skewed={true}>
                <Section bottom={2}>
                    <WavesClient />
                </Section>
            </Background>


            <Section>
                <Wallet />
            </Section>

            <Section top={2} bottom={4}>
                <DEX />
            </Section>

            <Background className={classes.bgDex} skewed={true}>
                <div className={classes.sectionWide}>
                    <IssuingTokens />
                    <Margin bottom={5} />
                    <Feedback>
                        <Facts tokens={initialState.dexData.dexAssets} />
                    </Feedback>
                </div>
            </Background>


            <Background className={classes.bgFeatures} skewed={true}>
                <div className={classes.withBackground}>
                    <PlannedFeatures />
                </div>
            </Background>


            <Section size={4}>
                <JoinUs />
            </Section>

            <div className={classes.footerMarginCompensate}>
                <Background className={classes.bgSubscription} skewed={true}>
                    <Subscribe />
                </Background>
            </div>

        </Layout>
    );


const Page = injectSheet(styles)(PageLayout);


const App = props => (
    <ThemeProvider>
        <Page { ...props } />
    </ThemeProvider>
)



export default App;