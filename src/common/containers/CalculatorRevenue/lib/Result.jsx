import React from 'react';

import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';

const styles = theme => ({
  inlineBlock: {
    display: 'inline-block',
  },
  resultTitle: {
    marginBottom: theme.spacing.unit,
  },
  currency: {
    color: theme.palette.primary[700],
  },
  textBlock: {
    composes: '$inlineBlock',
    whiteSpace: 'nowrap',
    lineHeight: 2,
  },
  sign: {
    color: theme.palette.gray[400],
  },
});

const Result = ({ classes, total, waves, mrt }) => (
  <div>
    <div className={classes.inlineBlock}>
      <div className={classes.resultTitle}>
        <Typography type="body">
          <FormattedMessage id="calcRevenue.interest" />
        </Typography>
      </div>

      <div className={classes.inlineBlock}>
        <div className={classes.textBlock}>
          <Typography type="numeral" tagName="span">
            <FormattedNumber value={waves} maximumFractionDigits={0} />
          </Typography>{' '}
          <Typography type="body" tagName="span" className={classes.currency}>
            WAVES
          </Typography>
          <Margin display="inline-block" left={1} right={1}>
            <Typography type="numeral" tagName="span" className={classes.sign}>
              +
            </Typography>
          </Margin>
        </div>
        <div className={classes.textBlock}>
          <Typography type="numeral" tagName="span">
            <FormattedNumber value={mrt} maximumFractionDigits={0} />
          </Typography>{' '}
          <Typography type="body" tagName="span" className={classes.currency}>
            MRT
          </Typography>
          <Margin display="inline-block" left={1} right={1}>
            <Typography type="numeral" tagName="span" className={classes.sign}>
              ≈
            </Typography>
          </Margin>
        </div>
      </div>

      <Margin bottom={2} />
    </div>
    <div className={classes.inlineBlock}>
      <div className={classes.resultTitle}>
        <Typography type="body">
          <FormattedMessage id="calcRevenue.total" />
        </Typography>
      </div>
      <div>
        <Typography type="numeral" tagName="span">
          <FormattedNumber value={total} maximumFractionDigits={0} />
        </Typography>{' '}
        <Typography type="body" tagName="span" className={classes.currency}>
          WAVES
        </Typography>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(Result);
