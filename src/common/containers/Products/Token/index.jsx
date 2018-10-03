import React from 'react';

// components
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import HowToToken from 'src/common/components/HowToToken';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

// lib
import MainScreen from './lib/MainScreen';
import IssuingTokens from './lib/IssuingTokens';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ classes }) => (
  <Layout activeLink="product/token" hideCredentials>
    <BackgroundMainScreen type="image" src={require('./img/bg.jpg')}>
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4}>
        <ContentContainer>
          <IssuingTokens />
        </ContentContainer>
      </Section>
      <Margin top={2} bottom={6}>
        <ContentContainer>
          <Typography type="display3Inverted">
            <FormattedMessage id="feedback.companiesReleased" />
          </Typography>
        </ContentContainer>
      </Margin>
    </Wrapper>

    <Wrapper>
      <Section className={classes.bgBlue}>
        <ContentContainer>
          <HowToToken eventPage="ProductToken" eventSource="HowToToken" />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const App = injectSheet(styles)(PageLayout);

export default App;
