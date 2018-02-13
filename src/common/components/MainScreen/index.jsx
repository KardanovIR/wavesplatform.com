import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';
const alignToSizeMap = {
  left: {
    xs: 12,
    sm: 8,
    lg: 8,
    xsOffset: 0,
    smOffset: 2,
    lgOffset: 0,
  },
  center: {
    xs: 12,
    sm: 10,
    lg: 10,
    xsOffset: 0,
    smOffset: 2,
    lgOffset: 1,
  },
  right: {
    xs: 12,
    sm: 10,
    lg: 8,
    xsOffset: 0,
    smOffset: 2,
    lgOffset: 2,
  },
};
const MainScreen = ({
  title,
  text,
  imageDesktop,
  imageMobile,
  classes,
  buttons,
  align,
  inverted,
  titleType,
  alignMobile,
}) => (
  <Row className={classes.root}>
    <div className={classes.inner}>
      <Col {...alignToSizeMap[align]}>
        <Typography
          type={titleType}
          weight={700}
          className={classes.title}
          inverted={inverted}
          align={align}
          alignMobile={alignMobile}
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

      <Col {...alignToSizeMap[align]}>
        <div className={classes.descriptionText}>{text}</div>

        {buttons && buttons.length > 0 && <Margin bottom={text ? 3 : 6} />}

        <div className={classes.buttonsContainer}>
          {buttons &&
            buttons.map((button, index) => (
              <div
                className={cn(
                  classes.buttonWrapper,
                  button.props.containerClassName
                )}
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
  align: 'center',
  alignMobile: 'center',
  titleType: 'display5',
};

MainScreen.propTypes = {
  title: PropTypes.node,
  titleType: PropTypes.string,
  text: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.node),
  imageDesktop: PropTypes.node,
  imageMobile: PropTypes.node,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  alignMobile: PropTypes.oneOf(['left', 'right', 'center']),
};

export default injectSheet(styles)(MainScreen);
