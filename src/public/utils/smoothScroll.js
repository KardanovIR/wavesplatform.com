const ease = require('eases/quad-in-out');

const smoothScroll = (targetScrollPos, duration = 500) => {
  let timeElapsed, timeStart;
  const start = document.body.getBoundingClientRect().top;

  requestAnimationFrame(time => {
    timeStart = time;
    loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scroll(
      0,
      ease(timeElapsed / duration) * (targetScrollPos + start) - start
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(loop);
    } else {
      end();
    }
  }

  function end() {
    window.scrollTo(0, targetScrollPos);
    timeStart = null;
  }
};

const smoothScrollTo = (
  element,
  { duration = 300, scrollToViewport = false, viewportOffsetTop = 0 } = {}
) => {
  const rect = element.getBoundingClientRect();

  if (scrollToViewport) {
    // if scrollToViewport option is true, only scroll if element
    // is not in viewport. Here is the check
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) return;
  }

  // scroll to element
  smoothScroll(
    rect.top - document.body.getBoundingClientRect().top - viewportOffsetTop,
    duration
  );
};

export { smoothScrollTo };

export { smoothScroll };
export default smoothScroll;
