import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
// import Typography from 'src/common/components/Typography';
// import { Row, Col } from 'src/common/components/Grid';
// import Button from 'src/common/components/Button';



// lib
import MainScreen from './lib/MainScreen';
// import Description from './lib/Description';
// import WavesClient from './lib/WavesClient';
// import Wallet from './lib/Wallet';
// import DEX from './lib/DEX';
import Feedback from './lib/Feedback';
import Facts from './lib/Facts';
// import PlannedFeatures from './lib/PlannedFeatures';
// import JoinUs from './lib/JoinUs';
// import Subscribe from './lib/Subscribe';



// styles
import injectSheet from 'react-jss';
// import cn from 'classnames';


const styles = theme => ({
    padded: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    centered: {
        textAlign: 'center'
    },
    marginSmall: {
        marginBottom: theme.spacing.unit
    },
    marginMedium: {
        marginBottom: theme.spacing.unit * 2
    },
    marginBig: {
        marginBottom: theme.spacing.unit * 4
    }
})


const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreen />
        {/* <Description /> */}
        {/* <WavesClient /> */}

        

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
        <br />
         <Facts /> 
        <br />
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