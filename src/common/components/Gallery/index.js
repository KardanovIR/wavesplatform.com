import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';

class Gallery extends Component {
  static propTypes = {
    swiperProps: PropTypes.object,
  };

  static defaultProps = {
    swiperProps: {},
  };

  state = {
    indexActive: 0,
  };

  componentDidMount() {
    this.__gallery = new Swiper(this.$root, {
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: this.$bulletsContainer,
        type: 'bullets',
        clickable: true,
        bulletElement: 'button',
        bulletClass: this.props.classes.bullet,
        bulletActiveClass: this.props.classes.bulletActive,
      },
      ...this.props.swiperProps,
    });
  }

  componentWillUnmount() {
    this.__gallery && this.__gallery.destroy();
  }

  render() {
    const { children, swiperProps, classes, className: classNameProp } = this.props;

    return (
      <div
        className={cn('swiper-container', classes.root, classNameProp)}
        ref={ref => (this.$root = ref)}
      >
        <div className="swiper-wrapper">
          {Children.map(children, child =>
            cloneElement(child, {
              className: cn(child.props.className, classes.slide, 'swiper-slide'),
            })
          )}
        </div>
        <div ref={ref => this.$bulletsContainer = ref} className={classes.bulletContainer} />
      </div>
    );
  }
}

export default injectSheet(styles)(Gallery);
