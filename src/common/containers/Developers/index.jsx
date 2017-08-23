import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
// import { Row, Col } from 'src/common/components/Grid';



// lib
import MainScreen from './lib/MainScreen';
import FriendlyAPI from './lib/FriendlyAPI';
import WavesNode from './lib/WavesNode';
import DEX from './lib/DEX';
import WavesNetwork from './lib/WavesNetwork';
import Community from './lib/Community';
import Description from './lib/Description';



// styles
import injectSheet from 'react-jss';
import styles from './styles';



const PageLayout = ({ classes }) => (
    <Layout activeLink="Developers">
        <Background className={classes.bgMain}>
            <MainScreen />
        </Background>

        <div className={classes.sectionNarrow}>
            <Description />
        </div>


        <Background className={classes.bgApi} skewed={true}>
            <div className={classes.sectionWide}>
                <FriendlyAPI />
            </div>
        </Background>


        <div className={classes.sectionWide}>
            <WavesNode />
        </div>


        <Background className={classes.bgDex} skewed={true}>
            <div className={classes.sectionWide}>
                <DEX />
            </div>
        </Background>


        <div className={classes.sectionWide}>
            <WavesNetwork />
        </div>

        <div className={classes.paddedBottom}>
            <Community />
        </div>

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;