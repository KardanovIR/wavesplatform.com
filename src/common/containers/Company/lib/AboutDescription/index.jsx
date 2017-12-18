// @todo locale
import React from 'react';

import Typography from 'src/common/components/Typography';
import style from './styles';
import injectSheet from 'react-jss';

const AboutDescription = ({classes}) => (
    <div>
        <Typography type={'display5'} className={classes.aboutText} tagName="span">
           The Waves Platform is a global public blockchain platform, founded in 2016.
            Waves Platform’s mission is to reinvent the DNA of entrepreneurship around
            the world by providing a shared infrastructure, offering easy-to-use, highly
            functional tools to make blockchain available to every person or organisation
            that can benefit from it.
        </Typography>
    </div>
);

export default injectSheet(style)(AboutDescription);
