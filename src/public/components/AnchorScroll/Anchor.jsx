import React from 'react';

const Anchor = ({ anchor, tag: Tag, ...rest }) => (
  <Tag data-anchor={anchor} {...rest} />
);

Anchor.defaultProps = {
  tag: 'div',
};

export default Anchor;
