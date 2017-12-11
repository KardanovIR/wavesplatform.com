import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints.js';
import canUseDOM from 'src/common/utils/canUseDOM.js';
import IS_MS from 'src/common/utils/isMS.js';

export default class Video extends Component {
  static propTypes = {
    poster: PropTypes.string,
    srcSet: PropTypes.string,
    firstFrame: PropTypes.string,
    noMSIE: PropTypes.bool,
  };

  static defaultProps = {
    noMSIE: true,
  };

  state = {
    canPlaysInline: false,
  };

  componentWillMount() {
    if (canUseDOM) {
      this.setState({
        canPlaysInline: 'playsInline' in document.createElement('video'),
      });
    }
  }

  componentDidMount() {
    this.setState({
      canPlaysInline: 'playsInline' in document.createElement('video'),
    });
  }

  render() {
    const { children, poster, className, srcSet, noMSIE, firstFrame, ...rest } = this.props;
    const { canPlaysInline } = this.state;

    const Video = (
      <video poster={firstFrame} className={className} playsInline {...rest}>
        {children}
      </video>
    );

    if (!canUseDOM) {
      return Video;
    }

    return (
      <MQ query={query.md}>
        {matches =>
          (matches || canPlaysInline) && !(noMSIE && IS_MS) ? (
            Video
          ) : (
            <img src={poster} srcSet={srcSet} alt="" className={className} />
          )
        }
      </MQ>
    );
  }
}
