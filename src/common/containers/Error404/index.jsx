import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
// import MainScreenBackground from 'src/common/components/Background/MainScreen';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import cn from 'classnames';

import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  '@global #app': {
    height: '100%',
  },
  '@global html': {
    height: '100%',
  },
  '@global body': {
    height: '100%',
    backgroundColor: '#002eff',
  },
  outerWrapper: {
    height: '100vh',
    ...flexCentered,
  },
  innerWrapper: {
    width: '90%',
    maxWidth: 500,
    textAlign: 'center',
    marginTop: '-10%',
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#002eff'
  }
});

const PageLayout = ({ classes }) => (
  <Layout hideFooter>
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        <Typography type="display4" inverted>
          404
          <br />
          <FormattedMessage id="error404.notFound" defaultMessage="Page not found" />
        </Typography>
        <Typography type="body" inverted>
          <FormattedMessage
            id="error404.sorry"
            defaultMessage="Sorry, this is not the web page you are looking for."
          />
        </Typography>
        <Margin bottom={3} />
        <Button secondary inverted href="/" className={classes.button}>
          <FormattedMessage id="error404.backHome" defaultMessage="Back home" />
        </Button>
      </div>
    </div>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
