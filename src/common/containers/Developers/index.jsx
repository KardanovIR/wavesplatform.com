import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
// import { Row, Col } from 'src/common/components/Grid';



// lib
import MainScreen from './lib/MainScreen';
import FriendlyAPI from './lib/FriendlyAPI';
import WavesNode from './lib/WavesNode';
import DEX from './lib/DEX';
import WavesNetwork from './lib/WavesNetwork';
import Community from './lib/Community';



// styles
import injectSheet from 'react-jss';


const styles = theme => ({
    section: {
        padding: theme.spacing.getSpacing(5, 0)
    }
})


const PageLayout = ({ classes }) => (
    <Layout>
        <div className={classes.section}>
            <MainScreen />
        </div>

        <div className={classes.section}>
            <FriendlyAPI />
        </div>

        <div className={classes.section}>
            <WavesNode />
        </div>

        <div className={classes.section}>
            <DEX />
        </div>

        <div className={classes.section}>
            <WavesNetwork />
        </div>

        <div className={classes.section}>
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