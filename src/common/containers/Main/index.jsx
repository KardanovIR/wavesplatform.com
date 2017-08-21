import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';
// import Button from 'src/common/components/Button';

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
// import cn from 'classnames';



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


            <Row centered>
                <Col xs={12} md={10}>
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
                </Col>
            </Row>

            <div className={classes.paddedTop}>
                <IssuingTokens />
            </div>

            <div className={classes.section}>
                <Feedback />
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