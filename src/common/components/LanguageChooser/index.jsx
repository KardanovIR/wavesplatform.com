import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import cn from 'classnames';
import { compose } from 'ramda';
import injectSheet from 'react-jss';
import styles from './styles';
import { withCookies } from 'react-cookie';


const createOption = lang => ({ value: lang, name: lang });
const OPTIONS =['ru', 'en'].map(createOption);
const DEFAULT_LANG = 'en';
const COOKIE_LANGUAGE_PATH = 'lang'

class LanguageChooser extends PureComponent {
    static propTypes = {
        cookies: PropTypes.object.isRequired
    };
    state = { activeLanguage: null };
    constructor(props) {
        super(props);
        this.state = { activeLanguage: DEFAULT_LANG };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ activeLanguage: nextProps.cookies.get(COOKIE_LANGUAGE_PATH) })
    }
    handleChange = language => this.setState({
        activeLanguage: language
    }, () => this.props.cookies.set(COOKIE_LANGUAGE_PATH, language));
    render() {
    
        return <Select
            options={OPTIONS}
            onSelect={this.handleChange}
            value={this.state.activeLanguage}
        />;
    }
}

export default compose(
    withCookies,
    injectSheet(styles)
)(LanguageChooser);
