import React from 'react';

import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import Panel from 'src/common/components/Panel';
import Divider from 'src/common/components/Divider';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';
const styles = ({ palette, spacing, breakpoints }) => ({
  nodeLink: {
    float: 'right',
    fontSize: 20,
    lineHeight: 1,
  },
  spaced: {
    margin: [spacing.unit * 1.5, 0],
  },
  copyToClipboard: {
    marginTop: spacing.unit,
    borderRadius: spacing.radius,
    padding: [spacing.unit, spacing.unit * 1],
    border: [1, 'solid', palette.gray[100]],
    background: palette.gray[50],
  },
  copyToClipboardText: {
    color: palette.primary[700],
    fontSize: '9px',
  },
  [breakpoints.up('md')]: {
    copyToClipboard: {
      padding: [spacing.unit, spacing.unit * 2],
    },
    copyToClipboardText: {
      fontSize: '12px',
    },
  },
});

const Node = ({ name, balance, share, classes, address, href }) => (
  <Panel>
    <Link
      href={href}
      target="_blank"
      className={classes.nodeLink}
      textDecoration={false}
    />

    <Link href={href} target="_blank" textDecoration={false} icon={null}>
      <Typography tagName="span" type="display1">
        {name}
      </Typography>
    </Link>

    <Margin />

    <Divider />

    <div className={classes.spaced}>
      <Row>
        <Col xs={4}>
          <Typography type="body">
            <FormattedMessage id="balance" />
          </Typography>
        </Col>

        <Col xs={8}>
          <Typography type="body" align="right">
            <FormattedNumber value={balance} maximumFractionDigits={0} /> WAVES
          </Typography>
        </Col>
      </Row>
    </div>

    <Divider />

    <div className={classes.spaced}>
      <Row>
        <Col xs={4}>
          <Typography type="body">
            <FormattedMessage id="mining.nodes.share" />
          </Typography>
        </Col>

        <Col xs={8}>
          <Typography type="numeral" align="right">
            <FormattedNumber value={share} /> %
          </Typography>
        </Col>
      </Row>
    </div>

    <Margin bottom={2}>
      <Divider />
    </Margin>

    <Typography type="body">
      <FormattedMessage id="mining.nodes.copyAddress" />
    </Typography>

    <div className={classes.copyToClipboard}>
      <Typography className={classes.copyToClipboardText} type="body">
        {address}
      </Typography>
    </div>
  </Panel>
);

export default injectSheet(styles)(Node);
