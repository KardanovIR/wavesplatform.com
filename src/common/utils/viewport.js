import { subscribe } from 'subscribe-ui-event';
import canUseDOM from './canUseDOM';

class Viewport {
  constructor() {
    this._handleScroll = this._handleScroll.bind(this);
    this._handleResize = this._handleResize.bind(this);

    subscribe('scroll', this._handleScroll, {
      useRAF: true,
      enableScrollInfo: true,
    });

    subscribe('touchmove', this._handleScroll, {
      useRAF: true,
      enableScrollInfo: true,
    });

    subscribe('resize', this._handleResize, {
      useRAF: true,
      enableResizeInfo: true,
    });

    this._handleScroll(null, {
      scroll: {
        top: window.pageYOffset,
      },
    });

    this._handleResize(null, {
      resize: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  // this is internal stuff. do not reference directly
  state_ = {
    pageY: canUseDOM ? window.pageYOffset : 0,
    width: canUseDOM ? window.innerWidth : 0,
    height: canUseDOM ? window.innerHeight : 0,
  };

  get pageY() {
    return this.state_.pageY;
  }

  get pageYBottom() {
    return this.state_.pageY + this.state_.height;
  }

  get height() {
    return this.state_.height;
  }

  get width() {
    return this.state_.width;
  }

  _handleScroll(_, {scroll}) {
    this.state_.pageY = scroll.top;
  }

  _handleResize(_, {resize}) {
    this.state_.width = resize.width;
    this.state_.height = resize.height;
  }

  subscribe(eventName, handler, options = {}) {
    return subscribe(eventName, handler, {
      useRAF: true,
      ...options,
    });
  }

}

export default new Viewport();
