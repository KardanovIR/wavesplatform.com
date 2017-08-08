import React from 'react';

import cn from 'classnames';

import injectSheet from 'react-jss';



const styles = theme => ({
    ...theme.typography,
    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    },
    'align-right': {
        textAlign: 'right'
    },
    'align-center': {
        textAlign: 'center'
    }
})



const Typography = ({
    classes,
    className: classNameProp,
    type,
    tagName,
    tagMap,
    children,
    align
}) => {
    const Tag = tagName || tagMap[type];

    const className = cn(
        classes[type],
        classes.colored,
        {
            [classes[`align-${String(align)}`]]: align !== Typography.defaultProps.align
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
    type: 'body1',
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



export default injectSheet(styles)(Typography);