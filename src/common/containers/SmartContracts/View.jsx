import React from 'react';
import ThemeProvider from 'src/common/components/ThemeProvider';

import { FormattedMessage } from 'react-intl';
import Typography from 'src/common/components/Typography';

import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import { Col, Row } from 'src/common/components/Grid';

import TwoStageImplementation from './lib/TwoStageImplementation';
import MainScreen from './lib/MainScreen';
import SCFeatures from './lib/Features';
import SubscribeSection from 'src/common/containers/SubscribeSection';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ onDocumentationClick, classes }) => (
  <Layout inverted hideCredentials activeLink="developers">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    >
      <ContentContainer>
        <MainScreen onDocumentationClick={onDocumentationClick} />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4} bottom={4}>
        <ContentContainer>
          <Row>
            <Col xs={12} md={6} className={classes.additionalPadding}>
              <Typography type="body2" weight={400} inverted>
                <FormattedMessage
                  id="smartContracts.block1.text1"
                  defaultMessage="Safe, secure and transparent business operations are already a reality. Provide the transactions with whatever conditions are required, based on a range of different parameters, including two-factor authentication, elapsed time and real-world data."
                />
              </Typography>
            </Col>
            <Col xs={12} md={6} className={classes.additionalPadding}>
              <Typography type="body2" weight={400} inverted>
                <FormattedMessage
                  id="smartContracts.block1.text2"
                  defaultMessage="Waves blockchain is already the fastest and most user-friendly in existence. Nevertheless, we are improving our platform all the time! The next revolution from Waves is already on the horizon: smart contracts, packed with powerful features."
                />
              </Typography>
            </Col>
          </Row>
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlack} top={4}>
        <ContentContainer>
          <SCFeatures />
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlackNight} top={4} bottom={4}>
        <ContentContainer>
          <TwoStageImplementation />
        </ContentContainer>
      </Section>
      <Section className={classes.bgJoinUs} top={4} bottom={2}>
        <ContentContainer>
          <SubscribeSection />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default App;
