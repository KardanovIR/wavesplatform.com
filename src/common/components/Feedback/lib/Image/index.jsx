import React from 'react';
import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

const styles = theme => ({
  wrapper: {
    overflow: 'hidden',
    position: 'relative',

    boxSizing: 'border-box',
  },
  imageWrapper: {
    position: 'relative'
  },
  block: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.getSpacing(1.5),
    zIndex: 0,

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',

      top: 0,
      bottom: -50,
      left: 0,
      right: 0,
      zIndex: -1,
    },
  },
  description: {

  },
  [theme.mixins.atMedia('md')]: {
    block: {
      padding: theme.spacing.getSpacing(1.5),
    },
  },
});

const CompanyImage = ({ classes, image, logo, description }) => (
  <div className={classes.wrapper}>
    <div className={classes.imageWrapper}>
      {image}
      <div className={classes.block}>
        {logo}
      </div>
    </div>
    <Typography className={classes.description} type="muted">
      {description}
    </Typography>
  </div>
);

export default injectSheet(styles)(CompanyImage);
