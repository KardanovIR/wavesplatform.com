import React from 'react';
import Margin from 'src/common/components/Margin';
import Quote from 'src/common/components/Quote';
import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';
import cx from 'classnames';

import styles from '../styles';
import injectSheet from 'react-jss';

const PopupContent = injectSheet(styles)(
  ({ userName, title, text, signature, className, classes, bgMobile }) => (
    <ContentContainer>
      <div className={cx(className, classes.popupContainer)}>
        <Typography type="numeral" weight={500} className={classes.title}>
          {userName}
        </Typography>
        <Margin top={2} />
        <Typography type="display3" weight={700}>
          {title}
        </Typography>
        <Margin top={3} />
        <Quote signature={signature} withQuotes={false} className={classes.quote}>
          {text}
        </Quote>
        <Margin top={3} />
        <img className={classes.image} src={bgMobile} alt="" />
      </div>
    </ContentContainer>
  )
);

export default injectSheet(styles)(PopupContent);
