import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flexCentered from 'src/common/styles/flexCentered';
import Wrapper from 'src/common/components/Wrapper';
import Video from 'src/common/components/InlineVideo';

import bgLight from './img/light_bgr.svg';
import bgDark from './img/dark_bgr.svg';
// import bgCommon from './img/common_bgr.svg';
// import bgProduct from './img/product_bgr.svg';

const styles = () => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
  },
  background: {
    position: 'absolute',

    top: 0,
    left: 0,
    zIndex: -1,

    height: '100%',
    width: '100vw',

    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    backgroundRepeat: 'no-repeat',
  },

  centered: flexCentered,

  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
  },

  light: {
    backgroundImage: `url(${bgLight})`,
  },
  dark: {
    backgroundImage: `url(${bgDark})`,
  },
});

const MainScreenBackground = ({ classes, children, className, type, src, videoSrc, videoSrcMobile, srcSet, videoFirstFrame, videoFirstFrameMobile }) => (
  <div className={classes.wrapper}>
    <Wrapper>
      <div
        className={cn(
          classes.background,
          classes.height,
          {
            [classes.dark]: type === 'dark',
            [classes.light]: type === 'light',
          },
          className
        )}
      >
        {videoSrc && <Video loop className={classes.image} src={videoSrc} srcMobile={videoSrcMobile} firstFrame={videoFirstFrame} firstFrameMobile={videoFirstFrameMobile} poster={src} srcSet={srcSet} />}
        {!videoSrc && src && <img className={classes.image} src={src} srcSet={srcSet} alt="" />}
      </div>
      {children}
    </Wrapper>
  </div>
);

MainScreenBackground.defaultProps = {
  type: 'light',
};

export default injectSheet(styles)(MainScreenBackground);
