import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

class Select extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
  };
  static defaultProps = {
    options: [],
    className: '',
    disabled: false,
    name: '',
  };

  handleChange = e => {
    this.props.onChange(e);
    this.props.onSelect(e.target.value);
  };

  render() {
    const {
      name,

      classes,
      className: classNameProp,

      disabled,
      invalid,

      options,

      theme, // eslint-disable-line
      sheet, // eslint-disable-line

      onChange, // eslint-disable-line
      onSelect, // eslint-disable-line

      ...rest
    } = this.props;

    const className = cn(
      classes.root,
      {
        [classes.disabled]: disabled,
        [classes.invalid]: invalid,
      },
      classNameProp
    );

    return (
      <select
        name={name}
        className={className}
        onChange={this.handleChange}
        {...rest}
      >
        {options.length &&
          options.map((opt, i) => (
            <option value={opt.value} key={`${name}_option_${i}`}>
              {opt.name}
            </option>
          ))}
      </select>
    );
  }
}

Select.defaultProps = {
  onChange: () => {},
};

export default injectSheet(styles)(Select);
