import React from 'react';

import Feedback from 'src/common/components/Feedback';
import Margin from 'src/common/components/Margin';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

import primalbasePhoto from './img/primalbase_photo.jpg';
import mobileGoPhoto from './img/mobile_go_photo.jpg';

const FeedbackContainer = ({ classes, children }) => (
  <div>
    <Feedback
      image={
        <img className={classes.image} src={primalbasePhoto} alt="primalbase" />
      }
      logo={<div className={classes.primalbaseLogo} />}
      avatar={<div className={classes.primalbaseAva} />}
      description={<FormattedMessage id="feedback.primalbase.description" />}
      title={<FormattedMessage id="feedback.primalbase.title" />}
      quote={<FormattedMessage id="feedback.primalbase.quote" />}
      signature={<FormattedMessage id="feedback.primalbase.signature" />}
    />

    <Margin bottom={5} />

    {children}

    <Margin bottom={5} />

    <Feedback
      image={
        <img className={classes.image} src={mobileGoPhoto} alt="mobile_go" />
      }
      logo={<div className={classes.mobileGoLogo} />}
      description={<FormattedMessage id="feedback.mobileGo.description" />}
      title={<FormattedMessage id="feedback.mobileGo.title" />}
      quote={<FormattedMessage id="feedback.mobileGo.quote" />}
      signature={<FormattedMessage id="feedback.mobileGo.signature" />}
    />
  </div>
);

export default injectSheet(styles)(FeedbackContainer);
