const styles = ({ spacing, colors, palette }) => {
  const OPTION_PADDING = [
    spacing.unit * 3 / 2,
    spacing.unit * 2,
    spacing.unit,
    spacing.unit * 2,
  ];
  const iconSizes = {
    height: '12px',
    width: '18px',
  };

  return {
    select: {
      color: palette.gray[400],
      fontSize: '12px',

      display: 'inline-block',
      position: 'relative',
      '& .Select-control': {
        display: 'flex',
      },

      '& .Select-multi-value-wrapper': {
        display: 'flex',
      },
      '& .Select-arrow-zone': {
        lineHeight: `50px`,
        position: 'absolute',
        right: 2 * spacing.unit,
      },
      '& .Select-option': {
        display: 'flex',
        justifyContent: 'start',
        '& > *': {
          width: '100%',
        },
        cursor: 'pointer',
        color: colors.black.default,

        '&:hover': {
          backgroundColor: colors.gray[700],
        },
        '&.is-selected': {
          display: 'none',
        },
        '& svg': iconSizes,
      },
      '& .Select-menu-outer': {
        position: 'absolute',
        background: 'white',
        // top: 'auto',
        // bottom: 'calc(100% - 1px)',
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
        '& svg': iconSizes,
      },
      '& .Select-option-label': {
        marginLeft: [spacing.unit / 2],
        marginRight: [spacing.unit / 2],
      },
    },
  };
};

export default styles;
