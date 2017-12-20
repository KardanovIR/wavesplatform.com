import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import cn from 'classnames';

import styles from './styles';

const ButtonGroup = ({ classes, className, options, value, onSelect }) => (
  <div className={cn(classes.wrapper, className)}>
    {options.map((opt, index) => (
      <div
        onClick={() => onSelect(opt.value)}
        className={cn(classes.button, {
          [classes.selected]: value === opt.value,
          [classes.first]: index === 0,
          [classes.last]: index === options.length - 1,
        })}
        key={`button_group_b${index}`}
        value={opt.value}
      >
        {opt.name}
      </div>
    ))}
  </div>
);

ButtonGroup.defaultProps = {
  onSelect: () => {},
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default injectSheet(styles)(ButtonGroup);
