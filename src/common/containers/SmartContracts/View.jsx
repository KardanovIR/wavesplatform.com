import React from 'react';

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
import UsefulLinks from './lib/UsefulLinks';
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
            <Col xs={12}>
              <Typography type="body2" weight={400} inverted>
                <FormattedMessage
                  id="smartContracts.block1.text"
                  defaultMessage="Waves platform is building blockchain-based solutions for enterprise applications. We provide smart and flexible tools capable of interacting with real-world data, designed to meet most business use cases."
                />
              </Typography>
            </Col>
          </Row>
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlack} top={4}>
        <ContentContainer>
          <SCFeatures />
          <UsefulLinks />
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

const App = injectSheet(styles)(PageLayout);
export default App;
