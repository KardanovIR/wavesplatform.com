import React from 'react';
import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Col, Row } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';

import messages from './messages';

const boxStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 310,
    height: '100%',
    backgroundColor: theme.palette.gray[9999],
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    padding: theme.spacing.getSpacing(5, 4, 5, 4),
    boxSizing: 'border-box',
    flexDirection: 'column',
    margin: '0 auto',
  },
  title: {
    fontSize: 19,
    paddingRight: 0,
    width: '100%',
  },
});

const Box = injectSheet(boxStyles)(({ classes, children, title }) => (
  <div className={classes.root}>
    <Typography type="display1" inverted className={classes.title}>
      {title}
    </Typography>
    <Margin bottom={1} />
    {children}
  </div>
));

const usefulLinksStyles = theme => ({
  link: {
    color: theme.palette.blue[500],
    display: 'block',
    lineHeight: 1.8,
  },
  boxRow: {
    justifyContent: 'space-evenly',
    '& > *': {
      marginBottom: 3 * theme.spacing.unit,
    },
  },
});
const UsefulLinks = ({ classes }) => (
  <div>
    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <Typography
          type="display3"
          inverted
          align="center"
          alignMobile="center"
        >
          <FormattedMessage
            id="smartContracts.usefulLinks.title"
            defaultMessage="Useful links"
          />
        </Typography>
      </Col>
    </Row>
    <Margin bottom={2} />
    <Row className={classes.boxRow}>
      <Col xs={12} sm={4}>
        <Box
          title={
            <FormattedMessage
              id="smartContracts.usefulLinks.platform.title"
              defaultMessage="Waves platform"
            />
          }
        >
          {messages.platform.map(message => (
            <Link
              key={message.url}
              href={message.url}
              className={classes.link}
              target="blank"
            >
              {message.text}
            </Link>
          ))}
        </Box>
      </Col>
      <Col xs={12} sm={4}>
        <Box
          title={
            <FormattedMessage
              id="smartContracts.usefulLinks.contracts.title"
              defaultMessage="Smart Contracts"
            />
          }
        >
          {messages.contracts.map(message => (
            <Link
              key={message.url}
              href={message.url}
              className={classes.link}
              target="blank"
            >
              {message.text}
            </Link>
          ))}
        </Box>
      </Col>
      <Col xs={12} sm={4}>
        <Box
          title={
            <FormattedMessage
              id="smartContracts.usefulLinks.tutorials.title"
              defaultMessage="Tutorials"
            />
          }
        >
          {messages.tutorials.map(message => (
            <Link
              key={message.url}
              href={message.url}
              className={classes.link}
              target="blank"
            >
              {message.text}
            </Link>
          ))}
        </Box>
      </Col>
    </Row>
    <Margin bottom={6} />
  </div>
);

export default injectSheet(usefulLinksStyles)(UsefulLinks);
