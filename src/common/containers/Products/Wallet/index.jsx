import React from 'react';
import cx from 'classnames';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';

import AnchorScroll from 'src/public/components/AnchorScroll';

import BackgroundMainScreen from 'src/common/components/Background/MainScreen';

// containers
import UserCases from 'src/common/components/UserCases';
import HowToWallet from 'src/common/components/HowToWallet';

// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import MobileWallet from './lib/MobileWallet';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ classes, initialState }) => (
  <Layout activeLink="product">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    >
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4} bottom={1}>
        <AnchorScroll anchor="wallet">
          <ContentContainer>
            <Wallet />
          </ContentContainer>
        </AnchorScroll>
      </Section>

      <Section top={1} bottom={4}>
        <ContentContainer>
          <MobileWallet />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={4} className={classes.bgGray}>
        <ContentContainer>
          <HowToWallet
            title={<FormattedMessage id="product.howToWallet.title" />}
            eventPage="ProductWallet"
            eventSource="HowToWallet"
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
