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

  render() {
    const { classes } = this.props;
    const { popupData } = this.state;

    return (
      <MQ query={query.md}>
        {matches =>
          matches ? (
            <Gallery className={classes.gallery} swiperProps={GALLERY_SETTINGS_D}>
              {SLIDES_DATA.map((data, i) => <UserCaseDesktop key={i} {...data} />)}
            </Gallery>
          ) : (
            [
              <Gallery key="gallery" className={classes.gallery} swiperProps={GALLERY_SETTINGS_M}>
                {SLIDES_DATA.map((data, i) => (
                  <UserCaseMobile key={i} {...data} onDetails={this.showDetails} />
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
};

const GALLERY_SETTINGS_M = {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  loopedSlides: 2,
};

export default injectSheet(styles)(UserCases);
