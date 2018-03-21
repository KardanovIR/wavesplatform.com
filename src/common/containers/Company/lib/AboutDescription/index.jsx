// @todo locale
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Typography from 'src/common/components/Typography';
import style from './styles';
import injectSheet from 'react-jss';

const AboutDescription = ({ classes }) => (
  <div>
    <Typography type={'display5'} className={classes.aboutText} tagName="span">
      <FormattedMessage id="company.about.text" />
    </Typography>
  </div>
);

export default injectSheet(style)(AboutDescription);
