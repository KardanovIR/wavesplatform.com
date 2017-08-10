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
        <FriendlyAPI />
        <WavesNode />
        <DEX />

        <Row>
            <Col xs={12} md={6}>
                <Panel dark>
                    <Typography type="display1" margin>
                        MainNet
                    </Typography>
                    <Typography type="body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perspiciatis autem eum modi magni ut dignissimos atque sapiente pariatur illum.
                    </Typography>
                </Panel>
            </Col>
        </Row>

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