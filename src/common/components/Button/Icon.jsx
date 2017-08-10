import React from 'react';
import PropTypes from 'prop-types';


import Button from './';
import Icon from 'src/common/components/Icon';

const IconButton = ({ iconName, ...rest }) => 
    <Button
        icon={
            iconName
                ? <Icon size={22} name={iconName} />
                : undefined
        }
        { ...rest}
    />


IconButton.PropTypes = {
    iconName: PropTypes.string.isRequired,
}

export default IconButton;