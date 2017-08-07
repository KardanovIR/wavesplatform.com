import React from 'react';

// components
import ThemeProvider from '../../components/ThemeProvider';
import Layout from '../../components/Layout';
// import Typography from '../../components/Typography';
// import { Row, Col } from '../../components/Grid';
// import Button from '../../components/Button';



// lib
import MainScreen from './lib/MainScreen';
import Description from './lib/Description';
import WavesClient from './lib/WavesClient';


// styles
import injectSheet from 'react-jss';



const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreen />
        <Description />
        <WavesClient />
    </Layout>
);


// const Page =  injectSheet(styles)(PageLayout);
const Page =  PageLayout;


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;