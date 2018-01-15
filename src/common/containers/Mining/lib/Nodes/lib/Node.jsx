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
  spaced: {
    margin: [spacing.unit * 1.5, 0],
  },
  nodeLink: {
    float: 'right',
    fontSize: 20,
    lineHeight: 1,
  },
  chartOuter: {
    width: '100%',
    height: spacing.unit * 6,
    position: 'relative',
    background: palette.gray[100],
  },
  chartInner: {
    position: 'absolute',
    // background: '#ED6B60',
    background: palette.blue[550],
    height: '100%',
    top: 0,
    left: 0,
    width: ({ share }) => `${share}%`,
  },

  copyToClipboard: {
    marginTop: spacing.unit,
    borderRadius: spacing.radius,
    padding: [spacing.unit, spacing.unit * 1],
    border: [1, 'solid', palette.gray[100]],
    background: palette.gray[50],
  },
  copyToClipboardText: {
    color: palette.gray[600],
    fontSize: 12,
    wordWrap: 'break-word',
  },
  panel: {
    padding: 0,
  },
  title: {
    fontSize: 23,
    fontWeight: 400,
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
  },
  [breakpoints.up('md')]: {
    copyToClipboard: {
      padding: [spacing.unit, spacing.unit * 2],
    },
    copyToClipboardText: {
      fontSize: '12px',
    },
    title: {
      fontSize: 23,
      fontWeight: 400,
    },
  },
});

const Node = ({ name, balance, share, classes, address, href }) => (
  <Panel className={classes.panel}>
    <Link
      href={href}
      target="_blank"
      className={classes.nodeLink}
      textDecoration={false}
    />

    <Link href={href} target="_blank" textDecoration={false} icon={null}>
      <Typography tagName="span" type="display1" className={classes.title}>
        {name}
      </Typography>
    </Link>

    <Margin />

    <Divider />

    <div className={classes.spaced}>
      <Row>
        <Col xs={4}>
          <Typography type="body">
            <FormattedMessage id="balance" defaultMessage="Balance" />
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

    <Margin bottom={2} />

    <div className={classes.chartOuter}>
      <div className={classes.chartInner} />
    </div>

    <Margin bottom={1} />

    <div className={classes.spaced}>
      <Row>
        <Col xs={4}>
          <Typography type="body">
            <FormattedMessage id="mining.nodes.share" defaultMessage="Share" />
          </Typography>
        </Col>

        <Col xs={8}>
          <Typography type="body" align="right">
            <FormattedNumber value={share} /> %
          </Typography>
        </Col>
      </Row>
    </div>

    <Margin bottom={2}>
      <Divider />
    </Margin>

    <Typography type="body">
      <FormattedMessage
        id="mining.nodes.copyAddress"
        defaultMessage="Copy leasing address"
      />
    </Typography>

    <div className={classes.copyToClipboard}>
      <Typography className={classes.copyToClipboardText} type="body">
        {address}
      </Typography>
    </div>
  </Panel>
);

export default injectSheet(styles)(Node);
