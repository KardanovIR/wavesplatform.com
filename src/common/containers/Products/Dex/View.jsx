import React from 'react';
import cx from 'classnames';
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import { Col } from 'src/common/components/Grid';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import DEXTopPairs from './lib/DEXTopPairs';
import DEXStats from './lib/DEXStats';
import MobileApp from './lib/MobileApp';
// lib
import MainScreen from './lib/MainScreen';
import DEXFeatures from './lib/DEXFeatures';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({
  initialState,
  classes,
  onDownloadClient,
  onAndroidClientClick,
  onIosClientClick,
}) => (
  <Layout inverted hideCredentials activeLink="dex">
    <BackgroundMainScreen type="image" src={require('./img/bg.jpg')}>
      <ContentContainer>
        <MainScreen onDownloadChange={onDownloadClient} />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4}>
        <ContentContainer>
          <DEXFeatures />
        </ContentContainer>
      </Section>
      <Section className={cx(classes.bgBlack, classes.noOverflow)}>
        <ContentContainer>
          <Col xs={12} md={8}>
            <Typography type="display3" inverted>
              <FormattedMessage id="products.dex.trade" />
            </Typography>
            <Margin bottom={4} />
          </Col>

          <DEXTopPairs pairs={initialState.dexTopPairs} />
          <DEXStats dexData={initialState.dexData} />
        </ContentContainer>
      </Section>
      <Section className={classes.bgMobileApp}>
        <ContentContainer>
          <MobileApp
            onAndroidClientClick={onAndroidClientClick}
            onIosClientClick={onIosClientClick}
          />
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
