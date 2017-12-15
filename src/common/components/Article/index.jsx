import React from 'react';

import Typography from 'src/common/components/Typography';

const Article = ({ title, text, inverted, textType = 'body' }) => (
  <div>
    <Typography type="display1" tagName="div" cut inverted={inverted}>
      {title}
    </Typography>
    <Typography type={textType} tagName="div" cut inverted={inverted}>
      {text}
    </Typography>
  </div>
);

export default Article;
