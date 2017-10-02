import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import MainScreen from 'src/common/components/MainScreen';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';




// lib
// import Team from './lib/Team';
import FeedbackForm from './lib/FeedbackForm';
import Whitepaper from './lib/Whitepaper';
import Media from './lib/Media';
// import Careers from './lib/Careers';


// styles
import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

// import teamMembers from './team';



const PageLayout = ({ classes }) => (
    <Layout activeLink="company">

        <MainScreenBackground>
            <MainScreen
                title={
                    <FormattedMessage
                        id="company.title"
                        defaultMessage="We create the economics of free, perfect and instant"
                    />
                }
                text={
                    <FormattedMessage
                        id="company.text"
                        defaultMessage="The Waves Platform is a global public blockchain platform, founded in 2016. Waves Platform’s mission is to reinvent the DNA of entrepreneurship around the world by providing a shared infrastructure, offering easy-to-use, highly functional tools to make blockchain available to every person or organisation that can benefit from it."
                    />
                }
            />
        </MainScreenBackground>

        {/* <Section> 
            <Team members={teamMembers} />
        </Section> */}

        {/* <Background className={classes.bgWhitepaper} skewed={true}> */}
        <Section top={3} bottom={2}> 
            <Whitepaper />
        </Section>
        {/* </Background> */}


        <div className={classes.sectionWide}>
            <Media />
        </div>



        <Background className={classes.bgCareers} skewed={true}>
            <Section size={4} className={classes.footerMarginCompensate}>
                <FeedbackForm onSubmit={val => console.log(val)} />
                {/* <Careers /> */}
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