import React from 'react';
import MQ from 'react-responsive';
// @todo refactor inject query
import { query } from 'src/common/theme/breakpoints';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Icon from 'src/common/components/Icon';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import flexCentered from 'src/common/styles/flexCentered';

import links from './links';
// import JoinIcon from './Icon'

const socialButtonStyles = theme => ({
  button: {
    ...flexCentered,
    width: 40,
    height: 40,
    padding: 0,
    borderRadius: '50%',
    '&:before, &:after': {
      borderRadius: '50%',
    },
    [theme.mixins.atMedia('sm')]: {
      float: 'left',
      marginRight: theme.spacing.unit * 2,
    },
  },
});

const SocialButton = injectSheet(socialButtonStyles)(
  ({ href, name, classes }) => (
    <Button
      bordered
      inverted
      href={href}
      target="_blank"
      className={classes.button}
    >
      <Icon name={name} size={18} color="gray-0" />
    </Button>
  )
);

const MainScreen = ({ classes }) => (
  <div>
    <Row className={classes.root}>
      <Col xs={12} sm={6} className={classes.article}>
        <Typography type="body2" className={classes.text} inverted>
          <FormattedMessage id="home.joinUs.text" />
        </Typography>
        <Margin />
        <Typography type="display1" inverted>
          Join the Waves Community
        </Typography>

        <MQ query={query.sm}>
          <Margin />
          <div className={classes.socialButtonsContainer}>
            {links.map(link => (
              <SocialButton key={`social_${link.name}`} {...link} />
            ))}
          </div>
        </MQ>
      </Col>
      <Col xs={12} sm={6} className={classes.article}>
        <Typography type="body2" className={classes.text} inverted>
          <FormattedMessage id="home.joinUs.quote" />
        </Typography>
        <Margin />
        <Typography type="display1" inverted>
          <Link
            // icon={null}
            textDecoration={false}
            target="_blank"
            href="https://wavescommunity.com"
            inverted
          >
            wavescommunity.com
          </Link>
        </Typography>
      </Col>
    </Row>

    <MQ query={query.sm}>
      {matches =>
        !matches && (
          <div className={classes.socialButtonsContainer}>
            {links.map(link => (
              <SocialButton key={`social_${link.name}`} {...link} />
            ))}
          </div>
        )
      }
    </MQ>
  </div>
);

export default injectSheet(styles)(MainScreen);
