export default function(theme) {
  return {
    '@keyframes closeButtonShow': {
      from: { opacity: 0, transform: 'translateY(5px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    textContainer: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      zIndex: 900,
      backgroundColor: '#fff',
    },
    textOuter: {
      width: '100%',
      height: '100%',
      paddingBottom: 50,
    },
    text: {
      position: 'relative',
      padding: 0,
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch',
    },
    closeButton: {
      cursor: 'pointer',
      position: 'absolute',
      top: 17,
      right: 20,
      width: 24,
      height: 24,
      appearance: 'none',
      border: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
      outline: 'none',
      zIndex: 10,
      padding: 24,
      opacity: 0,
      animation: 'closeButtonShow .3s ease-out .35s forwards',

      '&::after, &::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 26,
        height: 1,
        backgroundColor: '#000',
        transformOrigin: '50% 50%',
      },

      '&::after': {
        transform: 'translate(-50%, -50%) rotate(45deg)',
      },

      '&::before': {
        transform: 'translate(-50%, -50%) rotate(-45deg)',
      },
    },
    closeButtonInverted: {
      '&::after, &::before': {
        backgroundColor: '#fff',
      },
    },
  };
}
