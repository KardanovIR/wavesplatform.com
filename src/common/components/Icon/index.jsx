import React from 'react';

import { withTheme } from 'react-jss';

import IconsMap from './lib';
import CustomIcon from './lib/custom';

const Icon = ({ color, theme, name, ...rest }) => {
  const IconComponent = IconsMap[name] || CustomIcon;

  const passedColor =
    color !== 'inherit'
      ? theme.palette[color.split('-')[0]][color.split('-')[1]]
      : undefined;

  return <IconComponent color={passedColor} name={name} {...rest} />;
};

Icon.defaultProps = {
  size: '100%',
  color: 'inherit',
};

export default withTheme(Icon);
