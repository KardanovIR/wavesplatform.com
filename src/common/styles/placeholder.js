export default {
  // borderRadius: 15,
  outline: '6px dashed #f6f6f6',
  outlineOffset: -6,
  position: 'relative',
  '&:before': {
    content: '"Placeholder"',
    fontSize: 27,
    color: '#f0f0f0',
    fontWeight: 700,
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
  },
};
