import React, { Component } from 'react';
import Gallery from 'src/common/components/Gallery';
import Popup from 'src/common/components/Popup';
import injectSheet from 'react-jss';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints';
import styles from './styles';
import SLIDES_DATA from './mock';

import UserCaseDesktop from './lib/UserCaseDesktop';
import UserCaseMobile from './lib/UserCaseMobile';
import PopupContent from './lib/PopupContent';

class UserCases extends Component {
  state = {
    popupData: false,
  };

  showDetails = data => this.setState({ popupData: data });

  handleSlideClick = e => {
    e.preventDefault();

    const target = e.target.hasAttribute('data-slide-link')
      ? e.target
      : e.target.parentNode;

    if (target.hasAttribute('data-slide-link')) {
      this.setState({
        popupData: SLIDES_DATA[target.getAttribute('data-slide-link') | 0],
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { popupData } = this.state;

    return (
      <MQ query={query.sm}>
        {matches =>
          matches ? (
            <Gallery
              className={classes.gallery}
              swiperProps={GALLERY_SETTINGS_D}
            >
              {SLIDES_DATA.map((data, i) => (
                <UserCaseDesktop key={i} {...data} />
              ))}
            </Gallery>
          ) : (
            [
              <Gallery
                key="gallery"
                className={classes.gallery}
                swiperProps={GALLERY_SETTINGS_M}
                onClick={this.handleSlideClick}
              >
                {SLIDES_DATA.map((data, i) => (
                  <UserCaseMobile key={i} {...data} index={i} />
                ))}
              </Gallery>,
              <Popup
                key="popup"
                show={!!popupData}
                onClose={() => this.setState({ popupData: false })}
              >
                <PopupContent {...popupData} />
              </Popup>,
            ]
          )
        }
      </MQ>
    );
  }
}

const GALLERY_SETTINGS_D = {
  loop: true,
  autoplay: {
    delay: 7000,
  },
};

const GALLERY_SETTINGS_M = {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  loopedSlides: 2,
};

export default injectSheet(styles)(UserCases);
