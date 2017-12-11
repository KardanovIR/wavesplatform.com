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

    // workaround for React strip muted attribute on client render https://github.com/facebook/react/issues/10389
    if (this.$video) {
      this.$video.setAttribute('muted', '1');
      this.$video.setAttribute('playsinline', '1');
      this.$video.setAttribute('autoplay', '1');
    }
  }

  render() {
    const { children, poster, className, srcSet, noMSIE, firstFrame, ...rest } = this.props;
    const { canPlaysInline } = this.state;

    const Video = (
      <video
        ref={ref => (this.$video = ref)}
        poster={firstFrame}
        className={className}
        {...rest}
        autoPlay
        playsInline
        muted
      >
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
