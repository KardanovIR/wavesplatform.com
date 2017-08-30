import React from 'react';

import Typography from 'src/common/components/Typography';


const Article = ({ title, text }) => (
    <div>
        <Typography type="display1" tagName="div" cut>
            { title }
        </Typography>
        <Typography type="body" tagName="div" cut>
            { text }
        </Typography>
    </div>
)



export default Article;