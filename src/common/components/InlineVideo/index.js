import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints.js';
import canUseDOM from 'src/common/utils/canUseDOM.js';
import IS_MS from 'src/common/utils/isMS.js';

export default class Video extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcMobile: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
    firstFrame: PropTypes.string.isRequired,
    firstFrameMobile: PropTypes.string.isRequired,
    noMSIE: PropTypes.bool,
  };

  static defaultProps = {
    noMSIE: true,
  };

  state = {
    canPlaysInline: true,
  };

  componentWillMount() {
    if (canUseDOM) {
      this.setState({
        canPlaysInline: 'playsInline' in document.createElement('video'),
      });
    }
  }

  componentDidMount() {
    if (! this.state.canPlaysInline) {
      this.setState({
        canPlaysInline: 'playsInline' in document.createElement('video'),
      });
    }
  }

  render() {
    const {
      children,
      poster,
      className,
      srcSet,
      noMSIE,
      firstFrame,
      firstFrameMobile,
      src,
      srcMobile,
      ...rest
    } = this.props;

    const { canPlaysInline } = this.state;

    if (!canUseDOM) {
      return null;
    }

    return (
      <MQ query={query.tablet}>
        {matches =>
          (matches || canPlaysInline) && !(noMSIE && IS_MS) ? (
            <video
              {...rest}
              src={matches ? src : srcMobile}
              poster={matches ? firstFrame : firstFrameMobile}
              className={className}
              autoPlay
              playsInline
              muted
            >
              {children}
            </video>
          ) : (
            <img src={poster} srcSet={srcSet} alt="" className={className} />
          )
        }
      </MQ>
    );
  }
}
