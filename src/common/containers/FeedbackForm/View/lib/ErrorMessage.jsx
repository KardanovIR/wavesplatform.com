import React from 'react';

import Typography from 'src/common/components/Typography';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';

const styles = theme => ({
  text: {
    color: theme.palette.danger[500],
    marginTop: '-.4em',
  },
});

const ErrorMessage = ({ error, classes }) =>
  error ? (
    <Typography inverted align="right" className={classes.text}>
      <FormattedMessage id="form.errors.general" />
    </Typography>
  ) : null;

export default injectSheet(styles)(ErrorMessage);
