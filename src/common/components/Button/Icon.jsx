import React from 'react';

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


export default IconButton;