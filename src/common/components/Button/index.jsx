import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'src/common/components/Spinner';


import classnames from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';




const ButtonElement = ({ children, ...rest }) => (
    <button {...rest}>
        {children}
    </button>
);

const AnchorElement = ({ children, ...rest }) => (
    <a {...rest}>
        {children}
    </a>
);


const Button = props => {

    const {
        // big,
        // small,
        type,
        href,
        icon,
        classes,
        className,

        children,
        loading,

        theme, // eslint-disable-line
        sheet, // eslint-disable-line

        ...others,
	} = props;

    const buttonElementClasses = classnames(classes.button, {
        // [classes.small]: small,
        // [classes.big]: big,
        // [classes.default]: !primary,
        // [classes.primary]: primary,
    }, className);

    const contentWrapperClasses = classnames(
        classes.content,
        classes.text,
        { [classes.contentHidden]: loading }
    );


    const Element = href ? AnchorElement : ButtonElement;

    const elementProps = {
        ...others,
        href,
        className: buttonElementClasses,
        type: !href ? type : null,
    };


    return (
        <Element {...elementProps}>

            {loading && (
                <Spinner className={classes.spinner} />
            )}

            <div className={contentWrapperClasses}>
                {icon &&
                    <span className={classes.icon}>
                        {icon}
                    </span>
                }

                {children &&
                    <span className={classes.children}>
                        {children}
                    </span>
                }
            </div>

        </Element>
    )
};


Button.defaultProps = {
    type: 'button',
    className: '',
    // small: false,
    // big: false,
    disabled: false,
    // active: false,
    loading: false,
    color: 'primary-500',
    // primary: false
};


Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    // small: PropTypes.bool,
    // big: PropTypes.bool,
    href: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    // active: PropTypes.bool,
    loading: PropTypes.bool,
    // primary: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ])
};

export default injectSheet(styles)(Button);
