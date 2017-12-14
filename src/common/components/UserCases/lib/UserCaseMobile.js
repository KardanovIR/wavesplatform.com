import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';

import cn from 'classnames';

import styles from '../styles';
import injectSheet from 'react-jss';

const UserCaseMobile = ({
  classes,
  userName,
  title,
  text,
  className,
  bgMobile,
  onDetails,
  index,
}) => (
  <div className={cn(className, classes.slide)}>
    <Typography type="numeral" weight={500} className={classes.title}>
      {userName}
    </Typography>
    <Margin top={2} />
    <Typography type="display3" weight={700} className={classes.text}>
      {title}
    </Typography>
    <Margin top={3} />
    <Link
      onClick={e => {
        e.preventDefault();
        onDetails && onDetails({ userName, title, text, bgMobile });
      }}
      className={classes.link}
      data-slide-link={`${index}`}
    >
      Details
    </Link>
    <Margin top={4} />
    <img className={classes.image} src={bgMobile} alt="" />
  </div>
);

export default injectSheet(styles)(UserCaseMobile);
