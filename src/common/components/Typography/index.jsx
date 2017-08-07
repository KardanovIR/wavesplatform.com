import React from 'react';

import cn from 'classnames';

import injectSheet from 'react-jss';



const styles = theme => ({
    ...theme.typography,
    colored: {
        color: ({ color }) => theme.palette.getColor(color)
    }
})



const Typography = ({
    classes,
    className,
    type,
    tagName,
    tagMap,
    children
}) => {
    const Tag = tagName || tagMap[type];

    return (
        <Tag className={cn(classes[type], classes.colored, className)}>
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
        'body': 'span',
        'quote': 'span',
        'numeral': 'span'
    },
    className: '',
    color: 'gray-900'
}



export default injectSheet(styles)(Typography);