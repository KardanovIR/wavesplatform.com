import React from 'react';
import cx from 'classnames';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Wrapper from 'src/common/components/Wrapper';
import ContentContainer from 'src/common/components/ContentContainer';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from '../../components/Wallet';
import WalletText from './lib/WalletText';
import WavesNG from './lib/WavesNG';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Audience from './lib/Audience';
import UserCases from '../../components/UserCases';

import ButtonDropdown from 'src/common/components/ButtonDropdown';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

// url
import { fileUrl } from 'src/common/utils/url';

const PageLayout = ({ initialState, classes }) => (
  <Layout activeLink="home">

    <Wrapper>
      <Section top={3} bottom={2}>
        <ContentContainer>
         <ButtonDropdown>1325</ButtonDropdown>
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
