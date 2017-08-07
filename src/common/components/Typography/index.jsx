import React from 'react';

import injectSheet from 'react-jss';



const styles = theme => theme.typography;



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
        <Tag className={classes[type] + ' ' + className}>
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
    className: ''
}



export default injectSheet(styles)(Typography);