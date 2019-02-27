import React from 'react';

// components
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import MainScreen from 'src/common/components/MainScreen';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';

import AnchorScroll from 'src/public/components/AnchorScroll';
import ContentContainer from 'src/common/components/ContentContainer';

// lib
import Team from './lib/Team';
import FeedbackForm from './lib/FeedbackForm';
import Vacancies from './lib/Vacancies';
import Whitepaper from './lib/Whitepaper';
import AboutDescription from './lib/AboutDescription';
import Media from './lib/Media';
import Branding from './lib/Branding';
// import Careers from './lib/Careers';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

import {FormattedMessage} from 'react-intl';

// url
import {fileUrl} from 'src/common/utils/url';

const PageLayout = ({classes}) => (
    <Layout activeLink="company" darkFooter>
        <MainScreenBackground
            type="image"
            src={require('./img/Artboard.jpg')}
            videoSrc={fileUrl('video/blue_desktop.mp4')}
            videoSrcMobile={fileUrl('video/blue_mobile.mp4')}
            videoFirstFrame={require('./img/ffDesk.jpg')}
            videoFirstFrameMobile={require('./img/ffMob.jpg')}
        >
            <MainScreen inverted title={<FormattedMessage id="company.title"/>}/>
        </MainScreenBackground>

        {/* <Background className={classes.bgWhitepaper} skewed={true}> */}
        <Section top={2} bottom={2}>
            <ContentContainer>
                <AboutDescription/>
            </ContentContainer>
        </Section>

        <Section top={1} bottom={2}>
            <ContentContainer>
                <Team/>
            </ContentContainer>
        </Section>

        <Section top={1} bottom={2}>
            <ContentContainer>
                <Whitepaper/>
            </ContentContainer>
        </Section>
        {/* </Background> */}

        <Section top={1} bottom={2}>
            <ContentContainer>
                <Media/>
            </ContentContainer>
        </Section>

        <Section top={3} bottom={2} className={classes.bgBranding}>
            <ContentContainer>
                <Branding/>
            </ContentContainer>
        </Section>

        <Background className={classes.bgLight} skewed={true}>
            <Section size={4}>
                <AnchorScroll anchor="careers">
                    <ContentContainer>
                        <Vacancies/>
                    </ContentContainer>
                </AnchorScroll>
            </Section>
        </Background>

        <AnchorScroll anchor="contact">
            <Background className={classes.bgDark} skewed={true}>
                <Section size={4} className={classes.footerMarginCompensate}>
                    <FeedbackForm/>
                </Section>
            </Background>
        </AnchorScroll>
    </Layout>
);

const App = injectSheet(styles)(PageLayout);
export default App;
