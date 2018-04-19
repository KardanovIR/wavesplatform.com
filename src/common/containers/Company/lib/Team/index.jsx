import React from 'react';

import injectSheet from 'react-jss';
import styles from './styles';

const Team = ({ classes }) => (
  <div className={classes.bg}>
    <img className={classes.img} src={require('./img/desktop.jpg')} />
    <img className={classes.imgMobile} src={require('./img/mobile.jpg')} />
  </div>
);

export default injectSheet(styles)(Team);
