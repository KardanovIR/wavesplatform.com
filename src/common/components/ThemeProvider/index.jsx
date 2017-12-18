import React from 'react';

// body styles
import { global } from '../../theme/typography';
import theme from '../../theme';

// typography
import injectSheet, { ThemeProvider } from 'react-jss';

// global styles
const styles = {
  '@global body': {
    ...global,
    margin: 0,
    padding: 0,
  },
  '@global #app': {
    overflowX: 'hidden',
  },
};

const CustomThemeProvider = props => <ThemeProvider theme={theme} {...props} />;

export default injectSheet(styles)(CustomThemeProvider);
