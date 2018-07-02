const checkMark = {
  content: '""',
  bottom: 4,
  left: 4,
  width: 4,
  height: 8,
  border: 'solid black',
  borderWidth: '0 2px 2px 0',
  '-webkit-transform': 'rotate(45deg)',
  '-ms-transform': 'rotate(45deg)',
  transform: 'rotate(45deg)',
  display: 'block',
  position: 'absolute',
};

const styles = () => ({
  checkbox: {
    flex: 'none',
    '-webkit-appearance': 'none',
    display: 'inline-block',
    padding: 0,
    marginBottom: 4,
    height: 16,
    width: 16,
    background: 'transparent',
    position: 'relative',
    ['&:checked']: {
      background: 'white',
      ['&::after']: checkMark,
    },
  },
});

export default styles;
