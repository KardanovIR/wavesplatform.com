const styles = ({ spacing, colors, palette, breakpoints }) => {
  return {
    select: {
      display: 'inline-block',
      color: palette.gray[400],
      fontSize: '12px',

      position: 'relative',
      '& .Select-input': {
        outline: 'none',
      },
      '& .Select-control': {
        display: 'flex',
      },

      '& .Select-multi-value-wrapper': {
        display: 'flex',
      },
      '& .Select-arrow-zone': {
        lineHeight: `50px`,
        position: 'absolute',
        right: 3 * spacing.unit,
        top: 1, // visual aid
      },
      '& .Select-option': {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'start',
        '&:not(:last-child)': {
          borderBottom: '1px solid #f1f1f1',
          '& > a': {
            boxShadow: '0 0px 2px #c6c6c6', //fixing button's overflowing shadow
          },
        },
        '& > *': {
          width: '100%',
          marginRight: 1,
          marginLeft: 1,
        },
        cursor: 'pointer',
        color: colors.black.default,

        '&:hover': {
          backgroundColor: colors.gray[700],
        },
        '&.is-selected': {
          display: 'none',
        },
      },
      '& .Select-menu-outer': {
        position: 'absolute',
        background: 'white',
        zIndex: 10,
        width: '100%',
      },
      '& .Select-value-label': {
        marginLeft: [spacing.unit / 2],
        marginRight: [spacing.unit / 2],
        opacity: '0.7',
      },
      '& .Select-value': {
        display: 'inline-flex',
        justifyContent: 'start',
        cursor: 'default',
      },
      '& .Select-option-label': {
        marginLeft: [spacing.unit / 2],
        marginRight: [spacing.unit / 2],
      },
    },
  };
};

export default styles;
