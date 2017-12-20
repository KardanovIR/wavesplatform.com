import React from 'react';

import Background from 'src/common/components/Background';

import injectSheet from 'react-jss';

const styles = theme => ({
  outer: {
    overflow,
  },
});

const Footer = ({ classes, links }) => (
  <Background className={classes.background} />
);

export default injectSheet(styles)(Footer);
