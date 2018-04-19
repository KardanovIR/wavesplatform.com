import React from 'react';
import Popup from '../Popup';
import injectSheet from 'react-jss';
import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import Margin from 'src/common/components/Margin';
import { styles, stylesBg } from './styles';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const Background = injectSheet(stylesBg)(({ classes }) => (
  <div className={classes.bg}>
    <img
      className={classes.img}
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    />
    <img
      className={classes.imgMobile}
      src={require('./img/bgMobile.jpg')}
      srcSet={`${require('./img/bgMobile.jpg')} 1x, ${require('./img/bgMobile@2x.jpg')} 2x`}
    />
  </div>
));

const View = ({ classes, onClose, opened, onTelegramClick, telegramHref }) => (
  <Popup show={opened} classes={classes} inverted onClose={onClose}>
    <div className={classes.inner}>
      <div className={classes.innerText}>
        <Background />
        <Typography
          type="display3"
          align="left"
          alignMobile="center"
          cut
          inverted
          weight={700}
        >
          <FormattedHTMLMessage id="popup.telegram.title" />
        </Typography>
        <Typography
          type="body"
          align="left"
          alignMobile="center"
          inverted
          weight={400}
        >
          <FormattedMessage id="popup.telegram.text" />
        </Typography>
        <Margin bottom={3} />
        <Button
          onClick={onTelegramClick}
          href={telegramHref}
          key="main_cta_button2"
          target="_blank"
          inverted
        >
          <FormattedMessage id="popup.telegram.cta" />
        </Button>
      </div>
    </div>
  </Popup>
);
export default injectSheet(styles)(View);
