import React from 'react';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints.js';
import injectSheet from 'react-jss';
import { FormattedMessage } from 'react-intl';

import IconButton from 'src/common/components/Button/Icon';

import PictureBlock from '../PictureBlock';

const styles = theme => ({
  image: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    [theme.mixins.atMedia('sm')]: {
      marginTop: 0,
      position: 'absolute',
      right: '-20%',
      bottom: -30,
      width: '70%',
    },
  },
});

const dexImage = require('./img/dex.jpg');
const dexImage2x = require('./img/dex@2x.jpg');
const dexImageMob = require('./img/dexMob.jpg');
const dexImageMob2x = require('./img/dexMob@2x.jpg');
const DexImage = injectSheet(styles)(({ classes }) => (
  <MQ query={query.sm}>
    {matches => (
      <img
        className={classes.image}
        src={matches ? dexImage : dexImageMob}
        srcSet={
          matches ? `${dexImage} 1x, ${dexImage2x} 2x` : `${dexImageMob} 1x, ${dexImageMob2x} 2x`
        }
      />
    )}
  </MQ>
));

const DEX = ({ onDexApiClick, classes }) => (
  <PictureBlock
    title={
      <FormattedMessage id="developers.DEX.title" defaultMessage="Decentralised Exchange (DEX)" />
    }
    subtitle={
      <FormattedMessage
        id="developers.DEX.subtitle"
        defaultMessage="Our nodes contain an order matcher which is used to power our decentralised exchange — enabling token trades that don’t require tokens to be transferred from your blockchain account to a separate exchange."
      />
    }
    image={<DexImage />}
    text={[
      <FormattedMessage
        id="developers.DEX.text.p1"
        defaultMessage="All operations within the DEX are secure and validated by blockchain nodes. Since the DEX is open source and a part of every node, each user can run their own instance of the DEX."
      />,
      <FormattedMessage
        id="developers.DEX.text.p2"
        defaultMessage="The matcher exposes its own REST API for accessing the order book and submitting orders. This allows users to implement any kind of trading UI or trading bots."
      />,
    ]}
    buttons={[
      <IconButton
        onClick={onDexApiClick}
        href="https://github.com/wavesplatform/Waves/wiki/Matcher"
        target="_blank"
        iconName="github"
        className={classes.button}
        secondary
      >
        <FormattedMessage id="developers.cta.dexApi" defaultMessage="DEX API" />
      </IconButton>,
    ]}
  />
);

const stylesDEX = theme => ({
  button: {
    boxSizing: 'border-box',
    width: 240,
    [theme.mixins.atMedia(375)]: {
      width: '100%',
    },
    [theme.mixins.atMedia('sm')]: {
      width: '100%',
      marginRight: theme.spacing.unit * 10
    }
  }
});

export default injectSheet(stylesDEX)(DEX);
