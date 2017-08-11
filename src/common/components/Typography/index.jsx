import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';




const Typography = ({
    classes,
    className: classNameProp,
    type,
    tagName,
    tagMap,
    children,
    align,
    noMargin
}) => {
    const Tag = tagName || tagMap[type];

    const className = cn(
        classes[type],
        classes.colored,
        {
            [classes[`align-${String(align)}`]]: align !== Typography.defaultProps.align,
            [classes.noMargin]: noMargin
            // [classes[`margin-${String(type)}`]]: margin === true,
            // [classes[`margin-${String(type)}-${String(margin)}`]]: margin && margin !== true
        },
        classNameProp
    );

    return (
        <Tag className={className}>
            {children}
        </Tag>
    )
}


Typography.defaultProps = {
    type: 'body',
    tagName: '',
    tagMap: {
        'display4': 'h1',
        'display3': 'h2',
        'display2': 'h3',
        'display1': 'h4',
        'body': 'div',
        'quote': 'div',
        'numeral': 'div'
    },
    className: '',
    color: 'gray-900',
    align: 'auto'
}

const types = [
    'display4',
    'display3',
    'display2',
    'display1',
    'body',
    'quote',
    'numeral'
]

Typography.propTypes = {
    type: PropTypes.oneOf(types).isRequired,
    // margin: PropTypes.oneOf([true, ...types])
}



export default injectSheet(styles)(Typography);