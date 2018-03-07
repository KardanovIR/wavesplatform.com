import { withCookies } from 'react-cookie';
import React from 'react';
import PropTypes from 'prop-types';

const COOKIE_LANGUAGE_PATH = 'locale';
export const withLocaleCookie = Component => {
  @withCookies
  class LanguageCookieProvider extends React.Component {
    static propTypes = {
      cookies: PropTypes.object.isRequired,
    };
    handleLocaleChange = language => {
      this.props.cookies.set(COOKIE_LANGUAGE_PATH, language, {
        domain: '.wavesplatform.com',
      });
    };
    getLocale = () => this.props.cookies.get(COOKIE_LANGUAGE_PATH);
    render() {
      return (
        <Component
          onLocaleChange={this.handleLocaleChange}
          getLocale={this.getLocale}
          {...this.props}
        />
      );
    }
  }
  return LanguageCookieProvider;
};
