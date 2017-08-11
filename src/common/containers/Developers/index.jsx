import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';

import Typography from 'src/common/components/Typography';
import Panel from 'src/common/components/Panel';
import { Row, Col } from 'src/common/components/Grid';
// import Button from 'src/common/components/Button';



// lib
import MainScreen from './lib/MainScreen';
import FriendlyAPI from './lib/FriendlyAPI';
import WavesNode from './lib/WavesNode';
import DEX from './lib/DEX';
import WavesNetwork from './lib/WavesNetwork';
import Community from './lib/Community';

// import PlannedFeatures from './lib/PlannedFeatures';
// import JoinUs from './lib/JoinUs';
// import Subscribe from './lib/Subscribe';



// styles
import injectSheet from 'react-jss';
// import cn from 'classnames';


const styles = theme => ({
    section: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    // centered: {
    //     textAlign: 'center'
    // },
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

        <br/>
        <br/>
        <br/>

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);
// const Page = PageLayout;


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;