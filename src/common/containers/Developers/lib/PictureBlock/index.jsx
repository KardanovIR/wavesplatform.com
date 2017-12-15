import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';

const styles = theme => ({
  buttonWrapper: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    boxSizing: 'border-box',

    [theme.mixins.atMedia(414)]: {
      width: '50%',
      display: 'inline-block',
      padding: '0 10px 0 0'
    },

    [theme.mixins.atMedia('sm')]: {
      width: '100%',
      display: 'block'
    }
  },
  'button-wrapper-left': {
    composes: '$buttonWrapper',
  },
  'button-wrapper-right': {
    composes: '$buttonWrapper',
  },

  [theme.mixins.atMedia('md')]: {
    title: {
      fontSize: 24,
    },
    rowRight: {
      flexDirection: 'row-reverse',
    },
    'button-wrapper-left': {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: theme.spacing.unit * 2,
    },
    'button-wrapper-right': {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: theme.spacing.unit * 2,
    },

    'text-left': {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: '10%',
    },
    'text-right': {
      paddingRight: theme.spacing.unit * 4,
      paddingLeft: '10%',
      textAlign: 'right',
    },

    mdAlignCenter: {
      textAlign: 'center',
    },
  },
});

const Text = ({ text }) =>
  [].concat(text).map((p, i) => (
    <Typography inverted type="body" key={i}>
      {p}
    </Typography>
  ));

const PictureBlock = ({ classes, title, subtitle, image, text, buttons, align }) => (
  <div>
    <Row className={align === 'right' ? classes.rowRight : ''} style={{ alignItems: 'flex-start' }}>
      <Col xs={12}>
        <Row>
          <Col xs={12} sm={8} lg={7}>
            <Typography inverted type="display2" className={classes.title}>
              {title}
            </Typography>
            <Typography inverted type="body2">
              {subtitle}
            </Typography>
            <Margin bottom={4} />
          </Col>
        </Row>
      </Col>

      <Col xs={12} sm={5} md={4}>
        {buttons.map((button, index) => (
          <div className={classes[`button-wrapper-${align}`]} key={`devs_block_button_${index}`}>
            {button}
          </div>
        ))}

        {text && image && <Margin bottom={3} />}
        {text && image && <Text text={text} />}
      </Col>
      {image && <Col xs={12} md={8}>{image}</Col>}

      {text &&
        !image && (
          <Col xs={12} sm={7} className={classes[`text-${align}`]}>
            <Text text={text} />
            <Margin bottom={3} />
          </Col>
        )}
    </Row>
  </div>
);

PictureBlock.defaultProps = {
  align: 'left',
};

PictureBlock.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default injectSheet(styles)(PictureBlock);
