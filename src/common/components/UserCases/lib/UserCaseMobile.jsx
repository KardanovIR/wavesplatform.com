import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import cn from 'classnames';

import styles from '../styles';
import injectSheet from 'react-jss';

const UserCaseMobile = ({ classes, userName, title, className, bgMobile }) => (
  <div className={cn(className, classes.slide)}>
    <Typography type="numeral" weight={500} className={classes.title}>
      {userName}
    </Typography>
    <Margin top={2} />
    <Typography type="display3Inverted" className={classes.text}>
      {title}
    </Typography>
    <Margin top={4} />
    <img className={classes.image} src={bgMobile} alt="Case Picture" />
  </div>
);

UserCaseMobile.defaultProps = {
  onDetails: () => {},
};

export default injectSheet(styles)(UserCaseMobile);
