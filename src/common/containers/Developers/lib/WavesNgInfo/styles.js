const styles = theme => ({
  rowWithOrders: {
    '& > *': {
      order: 1,
    },
  },
  firstOnMobile: {
    order: '0',

    [theme.breakpoints.up('tablet')]: {
      order: '1',
    },
  },
});

export default styles;
