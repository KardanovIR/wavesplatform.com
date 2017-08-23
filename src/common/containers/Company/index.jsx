import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';



// lib
import MainScreen from './lib/MainScreen';
import Team from './lib/Team';
import Whitepaper from './lib/Whitepaper';
import Media from './lib/Media';
import Careers from './lib/Careers';



// @todo remove
// --== MOCK ==--
import members from './__mocks/members';



// styles
import injectSheet from 'react-jss';
import styles from './styles';




const PageLayout = ({ classes }) => (
    <Layout>

        <Background className={classes.bgMain}>
            <div className={classes.paddedBottom}>
                <MainScreen />
            </div>
        </Background>



        <div className={classes.sectionWide}>
            <Team members={members} />
        </div>


        <Background className={classes.bgWhitepaper} skewed={true}>
            <div className={classes.sectionWide}>
                <Whitepaper />
            </div>
        </Background>


        <div className={classes.section}>
            <Media members={members} />
        </div>



        <Background className={classes.bgCareers} skewed={true}>
            <div className={classes.footerMarginCompensate + ' ' + classes.sectionWide}>
                <Careers />
            </div>
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