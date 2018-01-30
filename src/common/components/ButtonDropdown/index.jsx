import React, { PureComponent } from 'react';
import pt from 'prop-types';
import window from 'global/window';
import { pathOr } from 'ramda';

import { LANGUAGE_MAP, ICONS_MAP } from './lib/constants.js';
import Select from 'react-select';
import Null from 'src/common/components/Null';
import injectSheet from 'react-jss';
import styles from './styles';

import Button from 'src/common/components/Button';

const Arrow = ICONS_MAP.arrow;
const arrowUp = <Arrow style={{ transform: 'rotate(180deg)' }} />;
const arrowDown = <Arrow />;
const arrowRenderer = ({ isOpen }) => (isOpen ? arrowUp : arrowDown);


@injectSheet(styles)
class ButtonDropdown extends PureComponent {
  static propTypes = {
    children: pt.node,
    classes: pt.object
  };

  render() {
    const { classes } = this.props;

    return (
      <Select
        className={classes.select}
        arrowRenderer={arrowRenderer}
        onChange={this.handleChange}
        options={[
          { value: '1', label: '2' },
          { value: '3', label: '4' },
        ]}
        optionComponent={OptionRenderer}
        placeholder={<PlaceholderRenderer />}
        searchable={false}
        clearRenderer={Null}
      />
    );
  }
}

class OptionRenderer extends PureComponent {
  static propTypes = {
    className: pt.string,
    isDisabled: pt.bool,
    isFocused: pt.bool,
    isSelected: pt.bool,
    onFocus: pt.func,
    onSelect: pt.func,
    option: pt.object.isRequired,
  };
  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { option, className } = this.props;

    return (
      <div className={className} onClick={this.handleClick}>
        <Button>{option.label}</Button>
      </div>
    );
  }
}

const PlaceholderRenderer = props => {
  console.log( props);
  return (
    <Button>123</Button>
  );
};

PlaceholderRenderer.propTypes = {
  value: pt.object,
};

export default ButtonDropdown;
