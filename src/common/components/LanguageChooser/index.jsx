import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { compose } from 'ramda';

import { withCookies } from 'react-cookie';
import iconsMap from './lib/iconsMap';
import Select from 'react-select';

import injectSheet from 'react-jss';
import styles from './styles';

const LANGUAGE_MAP = {
  en: 'English',
  ru: 'Русский',
  ko: '한국어',
};
const createOption = lang => ({ value: lang, label: LANGUAGE_MAP[lang] });
const availableLocales =
  typeof window !== 'undefined' && window.__AVAILABLE_LOCALES;

const DEFAULT_LANG = 'en';
const COOKIE_LANGUAGE_PATH = 'locale';
const Arrow = iconsMap.arrow;
const arrowUp = <Arrow style={{ transform: 'rotate(180deg)' }} />;
const arrowDown = <Arrow />;
const arrowRenderer = ({ isOpen }) => (isOpen ? arrowUp : arrowDown);
const Null = () => null;



@injectSheet(styles)
@withCookies
class LanguageChooser extends PureComponent {
  static propTypes = {
    cookies: PropTypes.object.isRequired,
  };
  handleChange = language => {
    this.props.cookies.set(COOKIE_LANGUAGE_PATH, language);
    document.location.reload();
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
        options={availableLocales.map(createOption)}
        value={cookies.get(COOKIE_LANGUAGE_PATH)}
        valueComponent={LanguageValue}
        simpleValue
        searchable={false}
        clearRenderer={Null}
      />
    );
  }
}

@injectSheet(styles)
class LanguageOption extends PureComponent {
  static propType = {
    children: PropTypes.node,
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
    const { option, className, classes } = this.props;
    const Icon = iconsMap[option.value];
    return (
      <div
        className={className}
        onClick={this.handleClick}
      >
        <Icon />
        <span className={classes.optionLabel}>{option.label}</span>
      </div>
    );
  }
}

@injectSheet(styles)
class LanguageValue extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    value: PropTypes.object,
    classes: PropTypes.object,
  };
  render() {
    const { value, classes } = this.props;
    const Icon = iconsMap[value.value];
    return (
      <div type="body" className={classes.value}>
        <Icon />
        <span className={classes.valueLabel}>{value.label}</span>
      </div>
    );
  }
}

export default LanguageChooser;
