import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';




class Input extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                content: PropTypes.node.isRequired,
            }).isRequired
        )
    }
    static defaultProps = {
        options: [],
        className: '',
        disabled: false,
        name: ''
    }

    render() {
        const {
            classes,
            className: classNameProp,

            disabled,
            invalid,

            options,

            theme, // eslint-disable-line
            sheet, // eslint-disable-line
            ...rest
        } = this.props;


        const className = cn(
            classes.root,
            {
                [classes.disabled]: disabled,
                [classes.invalid]: invalid,
            },
            classNameProp
        )

        return (
            <select name={name} className={className} {...rest}>
                {options.length && options.map((opt, i) => (
                    <option value={opt.value} key={`${name}_option_${i}`}>{opt.content}</option>
                ))}
            </select>
        )
    }
}


export default injectSheet(styles)(Input);