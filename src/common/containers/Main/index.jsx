import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
// import Button from 'src/common/components/Button';



// lib
import MainScreen from './lib/MainScreen';
import Description from './lib/Description';
import WavesClient from './lib/WavesClient';
import Wallet from './lib/Wallet';
import DEX from './lib/DEX';
import Feedback from './lib/Feedback';



// styles
import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    padded: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    centered: {
        textAlign: 'center',
        justifyContent: 'center'
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


const PageLayout = ({ classes: c }) => (
    <Layout>
        <MainScreen />
        <Description />
        <WavesClient />
        <Wallet />
        <DEX />


        <Row className={cn(c.centered, c.padded)}>
            <Col xs={12} sm={8} md={6}>
                <Typography type="display2" className={c.marginSmall}>
                    Issuing your tokens
                </Typography>
                <Typography type="body" className={c.marginSmall}>
                    Releasing tokens allows any business to use their own internal digital currency, using blockchain to pay for goods and services within their projects.
                </Typography>
                <Typography type="quote" color="gray-500">
                    Companies that have released their own tokens on Waves:
                </Typography>
            </Col>
        </Row>

        <Feedback
            image={<div style={{ height: '100%', background: 'lightblue' }} />}
            logo={<div style={{ height: 20, background: 'red' }} />}
            description="Worldwide coworking spaces for Tech Community"
            website="primalbase.com"
            title="Primalbase crowdsale ends after one day and over 3 000 BTC raised"
            quote="We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants"
            signature="Primalbase Team"
            avatar={<div style={{ height: 90, background: 'red' }} />}
        />
        
    </Layout>
        );


const Page =  injectSheet(styles)(PageLayout);
// const Page = PageLayout;


const App = () => (
    <ThemeProvider>
            <Page />
        </ThemeProvider>
        )



export default App;