import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';


// lib
import MainScreen from './lib/MainScreen';
import StressTest from './lib/StressTest';
import Descriptions from './lib/Descriptions';


// styles
import injectSheet from 'react-jss';
import styles from './styles';




const PageLayout = ({ classes }) => (
    <Layout>
        
        <MainScreenBackground type="dark">
            <MainScreen />
        </MainScreenBackground>


        <Section size={3}>
            <StressTest />
        </Section>

        <Background className={classes.bgDescriptions} skewed={true}>
            <Section size={4}>
                <Descriptions />
            </Section>
        </Background>

    </Layout>
);




const Page = injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;