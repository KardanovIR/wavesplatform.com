import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import window from 'global/window';
import { pathOr } from 'ramda';

import { withCookies } from 'react-cookie';
import { LANGUAGE_MAP, ICONS_MAP } from './lib/constants.js';
import Select from 'react-select';
import Null from 'src/common/components/Null';
import injectSheet from 'react-jss';
import styles from './styles';

const createOption = lang => ({ value: lang, label: LANGUAGE_MAP[lang] });
const availableLocales = pathOr([], ['__AVAILABLE_LOCALES'])(window);
const OPTIONS = availableLocales.map(createOption);
const COOKIE_LANGUAGE_PATH = 'locale';
const Arrow = ICONS_MAP.arrow;
const arrowUp = <Arrow style={{ transform: 'rotate(180deg)' }} />;
const arrowDown = <Arrow />;
const arrowRenderer = ({ isOpen }) => (isOpen ? arrowUp : arrowDown);

@injectSheet(styles)
@withCookies
class LanguageChooser extends PureComponent {
  static propTypes = {
    cookies: PropTypes.object.isRequired,
    inverted: PropTypes.bool,
  };
  static defaultProps = {
    inverted: false,
  };
  handleChange = language => {
    this.props.cookies.set(COOKIE_LANGUAGE_PATH, language, {
      domain: '.wavesplatform.com',
    });
    document.location.reload(true);
  };
  render() {
    const { cookies, classes } = this.props;
    if (!availableLocales || availableLocales.length === 0) {
      return null;
    }
    return (
      <Select
        className={classes.select}
        arrowRenderer={arrowRenderer}
        onChange={this.handleChange}
        optionComponent={LanguageOption}
        options={OPTIONS}
        value={cookies.get(COOKIE_LANGUAGE_PATH)}
        valueComponent={LanguageValue}
        simpleValue
        searchable={false}
        clearRenderer={Null}
      />
    );
  }
}

class LanguageOption extends PureComponent {
  static propType = {
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired,
  };
  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { option, className } = this.props;
    const Icon = ICONS_MAP[option.value];
    return (
      <div className={className} onClick={this.handleClick}>
        <Icon />
        <span className="Select-option-label">{option.label}</span>
      </div>
    );
  }
}

const LanguageValue = props => {
  const { value } = props;
  const Icon = ICONS_MAP[value.value];

  return (
    <div type="body" className="Select-value">
      <Icon />
      <span className="Select-value-label">{value.label}</span>
    </div>
  );
};

LanguageValue.propTypes = {
  value: PropTypes.object,
};

export default LanguageChooser;
