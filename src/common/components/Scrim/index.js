import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { subscribe } from 'subscribe-ui-event';
import raf from 'raf';
import canUseDOM from 'src/common/utils/canUseDOM.js';
import viewport from 'src/common/utils/viewport.js';
import injectSheet from 'react-jss';

function mapClamp(curr, lowerFrom, upperFrom, lower, upper) {
  var p = lower + (upper - lower) * (curr - lowerFrom) / (upperFrom - lowerFrom);
  return Math.max(lower, Math.min(upper, p));
}

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 5,
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: 'rgba(0,0,0,.3)',
    opacity: 0,
  },
});

class Scrim extends Component {
  startPx = 0;
  endPx = 0;
  height = 0;

  componentDidMount() {
    this._scrollEvent = subscribe('scroll', this.handleScroll, {
      useRAF: true,
    });

    this._resizeEvent = subscribe('resize', this.handleResize, {
      useRAF: true,
      throttleRate: 300,
    });

    setInterval(() => {
      const rect = this.$root.getBoundingClientRect();
      const top = rect.top + viewport.pageY;
      const bottom = top + rect.height;

      this.height = rect.height;
      this.startPx = bottom - 0.5 * viewport.height;
      this.endPx = bottom;
    }, 1000);
  }

  componentWillUnmount() {
    this._scrollEvent.unsubscribe();
  }

  handleScroll = () => {
    console.log(viewport.pageY, this.startPx, this.endPx);

    if (viewport.pageY >= this.startPx && viewport.pageY <= this.endPx) {
      this.$root.style.opacity = mapClamp(viewport.pageY, this.startPx, this.endPx, 0, 1);
    }
  };

  handleResize = () => {
    const rect = this.$root.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    const bottom = top + rect.height;

    this.startPx = bottom;
    this.endPx = bottom + 0.5 * viewport.height;
  };

  render() {
    return <div className={this.props.classes.root} ref={ref => (this.$root = ref)} />;
  }
}

export default injectSheet(styles)(Scrim);
