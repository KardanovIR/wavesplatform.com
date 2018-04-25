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
    flex: 'none',
  };

  return {
    select: {
      minWidth: 100,
      color: palette.gray[400],
      fontSize: '12px',
      border: ({ inverted }) =>
        `1px solid ${inverted ? palette.gray[400] : colors.gray[300]}`,
      borderRadius: spacing.radius,
      '&:hover, &.is-open': {
        borderColor: ({ inverted }) =>
          inverted ? palette.gray[300] : palette.gray[400],
        '& .Select-value-label': {
          opacity: 1,
        },
      },

      display: 'inline-block',
      position: 'relative',
      '& .Select-control': {
        padding: OPTION_PADDING,
        display: 'flex',
      },

      '& .Select-multi-value-wrapper': {
        display: 'block',
        flex: 1,
        height: `${spacing.unit * 2}px`,
      },
      '& .Select-arrow-zone': {
        lineHeight: `${spacing.unit * 2}px`,
      },
      '& .Select-option': {
        display: 'flex',
        justifyContent: 'start',

        cursor: 'pointer',
        color: colors.black.default,
        padding: OPTION_PADDING,

        '&:hover': {
          backgroundColor: colors.gray[700],
        },
        '&.is-selected': {
          display: 'none',
        },
        '& svg': iconSizes,
      },
      '& .Select-menu-outer': {
        borderTop: `1px solid ${palette.gray[400]}`,
        borderLeft: `1px solid ${palette.gray[400]}`,
        borderRight: `1px solid ${palette.gray[400]}`,
        position: 'absolute',
        background: 'white',
        top: 'auto',
        bottom: 'calc(100% - 1px)',
        zIndex: 1,
        width: '100%',
        left: '-1px',
      },
      '& .Select-value-label': {
        marginLeft: [spacing.unit / 2],
        marginRight: [spacing.unit / 2],
        opacity: '0.7',
        flex: 1,
      },
      '& .Select-value': {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'start',
        cursor: 'default',
        '& svg': iconSizes,
      },
      '& .Select-option-label': {
        marginLeft: [spacing.unit / 2],
        marginRight: [spacing.unit / 2],
        flex: 1,
      },
    },
  };
};

export default styles;
