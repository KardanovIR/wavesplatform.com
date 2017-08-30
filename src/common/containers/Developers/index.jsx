import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Margin from 'src/common/components/Margin';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';


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
        
        <MainScreenBackground type="dark">
            <MainScreen />
        </MainScreenBackground>

        <Section top={3} bottom={1}>
            <Description />
        </Section>

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


        <Section top={4}> 
            <WavesNetwork />
        </Section>

        <Section top={2} bottom={4}>
            <Community />
        </Section>

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;