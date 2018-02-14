import React from 'react';
import { connect } from 'react-redux';
// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import { Col, Row } from 'src/common/components/Grid';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

// lib
import MainScreen from './lib/MainScreen';
import IssuingTokens from './lib/IssuingTokens';

// intl

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import HowToToken from 'src/common/components/HowToToken';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { FormattedMessage } from 'react-intl';
import UserCases from 'src/common/components/UserCases';
import Facts from 'src/common/components/Facts';
import { downloadClientChange } from 'src/common/containers/DownloadClientDropdown/lib/actions';
const logSettings = { page: 'GetWaves', source: 'MainScreen' };

const withHandlers = connect(undefined, {
  onDropdownChange: downloadClientChange(logSettings),
});

const PageLayout = ({ initialState, classes, onDropdownChange }) => (
  <Layout activeLink="product">
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

    <UserCases />
    <Wrapper>
      <Section top={4} bottom={4}>
        <ContentContainer>
          <Facts tokens={initialState.dexData.dexAssets} />
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlue}>
        <ContentContainer>
          <HowToToken />
          <Margin bottom={4} />
          <Col xs={12} md={6}>
            <Typography type="display3Inverted">
              <FormattedMessage id="products.token.howToStartTrading.title" />
            </Typography>
            <Margin bottom={2} />
          </Col>
          <Col xs={12}>
            <Typography type="body">
              <FormattedMessage id="products.token.howToStartTrading.descr" />
            </Typography>
            <Margin bottom={2} />
            <DownloadClientDropdown
              key="main_cta_button1"
              onChange={onDropdownChange}
            />
            <Margin bottom={2} />
          </Col>
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

export default withHandlers(App);
