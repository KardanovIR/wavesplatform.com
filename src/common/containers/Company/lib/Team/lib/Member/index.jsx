import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Icon from 'src/common/components/Icon';
import Link from 'src/common/components/Link';
import Margin from 'src/common/components/Margin';

import injectSheet from 'react-jss';
import styles from './styles';

const Member = ({
  fullName,
  position,
  imageUrl1x,
  imageUrl2x,
  social,
  classes,
}) => (
  <div className={classes.root}>
    <div className={classes.image} style={{ backgroundImage: imageUrl2x }} />

    <div className={classes.overlay}>
      <div className={classes.social}>
        {social.map((contact, index) => (
          <Link
            textDecoration={false}
            target={contact.type === 'email' ? undefined : '_blank'}
            href={contact.url}
            key={`${index}_${contact.type}`}
            className={classes.icon}
            icon={null}
          >
            <Icon name={contact.type} size={20} />
          </Link>
        ))}
      </div>
    </div>
    <Margin top={1} />
    <div className={classes.text}>
      <Typography type="display1">{fullName}</Typography>
      <Typography type="body" noMargin>
        {position}
      </Typography>
    </div>
  </div>
);

Member.defaultProps = {
  social: [],
};

Member.propTypes = {
  fullName: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  imageUrl1x: PropTypes.string.isRequired,
  imageUrl2x: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default injectSheet(styles)(Member);
