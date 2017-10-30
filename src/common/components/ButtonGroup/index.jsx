import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import cn from 'classnames';

import styles from './styles';

const ButtonGroup = ({ classes, className, options, value, onChange }) => (
    <div className={cn(classes.wrapper, className)}>
        {options.map((opt, index) => (
            <div
                onClick={() => onChange(opt.value)}
                className={cn(classes.button, {
                    [classes.selected]: value === opt.value,
                    [classes.first]: index === 0,
                    [classes.last]: index === options.length - 1,
                })}
                key={`button_group_b${index}`}
            >
                {opt.name}
            </div>
        ))}
    </div>
);

ButtonGroup.defaultProps = {
    options: PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.node,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default injectSheet(styles)(ButtonGroup);
