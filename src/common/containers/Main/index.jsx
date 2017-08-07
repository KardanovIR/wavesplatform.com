import React from 'react';

import ThemeProvider from '../../components/ThemeProvider';
import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import { Row, Col } from '../../components/Grid';


import Button from '../../components/Button';



import NumbersMain from '../NumbersMain';


import injectSheet from 'react-jss';


const styles = theme => ({
    [theme.mixins.atMedia('md')]: {
        swappedToBottom: {
            order: 1
        },
        swappedToTop: {
            order: 0
        },
    }
})


const PageLayout = ({ classes }) => (
    <Layout>
        <Row>
            <Col xs={12} md={6}>
                <Typography type="display4">
                    Decentralized blockchain platform
                    </Typography>
                <Typography type="body">
                    Waves gives all the necessary infrastructure for the production, storage, management, sale and analysis of your digital assets
                    </Typography>
                <br />
                <br />
                <Button>Get Client</Button>
                <br />
                <br />
                <NumbersMain />
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Col xs={12} className={classes.swappedToBottom}>
                        <Typography type="body">
                            <div style={{ textAlign: 'right' }}>DELOITTE</div>
                            <br />
                        </Typography>
                    </Col>
                    <Col xs={12} className={classes.swappedToTop}>
                        <Typography type="body">
                            <div style={{ textAlign: 'right' }}>Красивая картинка</div>
                            <br />
                        </Typography>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Layout>
);


const Page =  injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;