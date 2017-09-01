import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
// import MainScreenBackground from 'src/common/components/Background/MainScreen';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';



import injectSheet from 'react-jss';
import cn from 'classnames';


import bgr from './img/bgr.svg';
import flexCentered from 'src/common/styles/flexCentered';


const styles = theme => ({
    '@global #app': {
        height: '100%'
    },
    '@global html': {
        height: '100%'
    },
    '@global body': {
        height: '100%',
        backgroundImage: `url(${bgr})`,
        backgroundColor: '#002eff',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
    },
    outerWrapper: {
        height: '70vh',
        ...flexCentered
    },
    innerWrapper: {
        width: '90%',
        maxWidth: 500,
        textAlign: 'center',
        marginTop: '-10%',
    }
})



const PageLayout = ({ classes }) => (
    <Layout hideFooter>
        <div className={classes.outerWrapper}>
            <div className={classes.innerWrapper}>
                <Typography type="display4" inverted>
                    404
                    <br />
                    Page not found
                </Typography>  
                <Typography type="body" inverted>
                    Sorry, this is not the web page you are looking for.
                </Typography>
                <Margin bottom={3} />
                <Button secondary href="/">Back home</Button>
            </div>
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