import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';

const MainScreen = ({
  title,
  text,
  imageDesktop,
  imageMobile,
  classes,
  buttons,
  inverted,
}) => (
  <Row className={classes.root}>
    <div className={classes.inner}>
      <Col xs={10} sm={10} lg={10} xsOffset={1} lgOffset={1}>
        <Typography
          type="display5"
          weight={700}
          className={classes.title}
          inverted={inverted}
        >
          {title}
        </Typography>
        <Margin />
      </Col>

      {(imageDesktop || imageDesktop) && (
        <Col
          xs={12}
          sm={5}
          lg={6}
          className={cn(classes.imageCol, {
            [classes.imageColMargin]: imageMobile,
          })}
        >
          <div
            className={cn(classes.widthSetter, {
              [classes.xsOnly]: !imageDesktop && imageMobile,
              [classes.xsHidden]: imageDesktop && !imageMobile,
            })}
          >
            <div className={classes.imageWrapper}>
              {!!imageMobile && (
                <div className={cn(classes.image, classes.xsOnly)}>
                  {imageMobile}
                </div>
              )}
              {!!imageDesktop && (
                <div className={cn(classes.image, classes.xsHidden)}>
                  {imageDesktop}
                </div>
              )}
            </div>
          </div>
        </Col>
      )}

      <Col xs={12} sm={8} lg={6} smOffset={2} lgOffset={3}>
        <div className={classes.descriptionText}>{text}</div>

        {buttons && buttons.length > 0 && <Margin bottom={text ? 3 : 6} />}

        <div className={classes.buttonsContainer}>
          {buttons &&
            buttons.map((button, index) => (
              <div
                className={classes.buttonWrapper}
                key={`main_cta_wrapper${index}`}
              >
                {cloneElement(button, {
                  className: cn(button.props.className, classes.button),
                })}
              </div>
            ))}
        </div>
      </Col>
    </div>
  </Row>
);

MainScreen.defaultProps = {
  buttons: [],
};

MainScreen.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.node),
  imageDesktop: PropTypes.node,
  imageMobile: PropTypes.node,
  animated: PropTypes.bool,
};

export default injectSheet(styles)(MainScreen);
