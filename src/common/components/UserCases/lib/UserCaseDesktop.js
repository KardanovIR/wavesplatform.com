import React from 'react';
import ContentContainer from 'src/common/components/ContentContainer';
import Section from 'src/common/components/Section';
import { Row, Col } from 'src/common/components/Grid';
import Quote from 'src/common/components/Quote';
import Typography from 'src/common/components/Typography';

import cn from 'classnames';

import styles from "../styles";
import injectSheet from 'react-jss';

const UserCaseDesktop = injectSheet(styles)(
  ({ userName, title, text, signature, className, classes, bg, logoSrc, logoSrcLight, logoSrcSet }) => (
    <Section
      size={2}
      className={cn(className, classes.slide)}
      style={{ backgroundImage: bg && `url(${bg})` }}
    >
      <ContentContainer>
        <Row className={classes.row}>
          <Col sm={3}>
            <Typography type="display1" inverted>
              {userName}
            </Typography>
          </Col>
          <Col sm={7} className={classes.body}>
            <Typography type="display3" inverted weight={600}>
              {title}
            </Typography>
            <Quote signature={signature} withQuotes={false} className={classes.quote} inverted>
              {text}
            </Quote>
          </Col>
          <img className={classes.logo} src={logoSrcLight || logoSrc} srcSet={!logoSrcLight && logoSrcSet} alt=""/>
        </Row>
      </ContentContainer>
    </Section>
  )
);

export default injectSheet(styles)(UserCaseDesktop);
