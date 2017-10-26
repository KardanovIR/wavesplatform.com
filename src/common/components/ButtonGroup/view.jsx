import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/common/components/Button';
// import Icon from 'src/common/components/Icon';

import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
    wrapper: {
        background: 'rgba(39, 47, 89, 0.22)',
        display: 'inline-block',
        boxShadow: '0 2px 4px 0 rgba(39, 47, 89, 0.25)',
        borderRadius: theme.spacing.radius,
    },
    button: {
        // margin: [0, 10],
        boxSizing: 'border-box',
        border: '1px solid #f0f0f0',
        boxShadow: 'none',

        borderRadius: 0,
        zIndex: 1,

        '&:hover': {
            transform: 'translateY(-2px)',
        },

        '&:before:hover': {
            opacity: 0.5,
        },

        '&:after': {
            display: 'none',
        },
    },
    selected: {
        background: theme.palette.primary[500],
        borderColor: 'transparent'
    },
    first: {
        marginLeft: 0,
        borderTopLeftRadius: theme.spacing.radius,
        borderBottomLeftRadius: theme.spacing.radius,
    },
    last: {
        borderTopRightRadius: theme.spacing.radius,
        borderBottomRightRadius: theme.spacing.radius,
    },
});


const buttonClasses = {
    content: { color: 'red', background: 'blue' }
}

const ButtonGroup = ({ classes, className, options, value, onChange }) => (
    <div className={cn(classes.wrapper, className)}>
        {options.map((opt, index) => (
                <Button
                    classes={buttonClasses}
                    secondary
                    onClick={() => onChange(opt.value)}
                    className={cn(classes.button, {
                        [classes.selected]: value === opt.value,
                        [classes.first]: index === 0,
                        [classes.last]: index === options.length - 1,
                    })}
                    target="_blank"
                    key={`button_group_b${index}`}
                >
                    {opt.name}
                </Button>
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
