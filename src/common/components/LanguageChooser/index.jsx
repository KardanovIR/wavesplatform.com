import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import cn from 'classnames';
import { compose } from 'ramda';
import injectSheet from 'react-jss';
import styles from './styles';
import { withCookies } from 'react-cookie';


const createOption = lang => ({ value: lang, name: lang });
const OPTIONS = ['ru', 'en'].map(createOption);
const DEFAULT_LANG = 'en';
const COOKIE_LANGUAGE_PATH = 'locale'

class LanguageChooser extends PureComponent {
    static propTypes = {
        cookies: PropTypes.object.isRequired
    };

    handleChange = language => {
        this.props.cookies.set(COOKIE_LANGUAGE_PATH, language);
        document.location.reload(); 
    }

    render() {
        const { cookies } = this.props;
        return <Select
            options={OPTIONS}
            onSelect={this.handleChange}
            value={cookies.get(COOKIE_LANGUAGE_PATH)}
        />;
    }
}

export default compose(
    withCookies,
    injectSheet(styles)
)(LanguageChooser);
