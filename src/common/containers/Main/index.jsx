import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Margin from 'src/common/components/Margin';
import Facts from 'src/common/components/Facts';


// containers
import Feedback from 'src/common/containers/Feedback';


// lib
import MainScreen from './lib/MainScreen';
import Description from './lib/Description';
import WavesClient from './lib/WavesClient';
import Wallet from './lib/Wallet';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Subscribe from './lib/Subscribe';



// styles
import injectSheet from 'react-jss';
import styles from './styles';



const PageLayout = ({
    initialState,
    classes
}) => (
        <Layout invertedNavigation>

            <Background className={classes.bgMain}>
                <MainScreen dexData={initialState.dexData} />
            </Background>

            <div className={classes.sectionNarrow}>
                <Description />
            </div>


            <Background className={classes.bgClient}>
                <div className={classes.section}>
                    <WavesClient />
                </div>
            </Background>


            <Background className={classes.bgWallet}>
                <div className={classes.section}>
                    <Wallet />
                </div>
            </Background>
            <Background className={classes.bgDex}>
                <div className={classes.section}>
                    <DEX />
                </div>
            </Background>

            <div className={classes.paddedTop}>
                <IssuingTokens />
            </div>

            <div className={classes.section}>
                <Feedback>
                    <Facts tokens={initialState.dexData.dexAssets} />
                </Feedback>
            </div>

            <Margin bottom={4} />

            <Background className={classes.bgFeatures} skewed={true}>
                <div className={classes.withBackground}>
                    <PlannedFeatures />
                </div>
            </Background>


            <div className={classes.section}>
                <JoinUs />
            </div>

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