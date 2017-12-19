const styles = ({ spacing, mixins, colors, palette }) => {
  const OPTION_PADDING = [
    spacing.unit * 3 / 2,
    spacing.unit * 2,
    spacing.unit,
    spacing.unit * 2,
  ];
  return ({
    select: {
      color: palette.gray[400],
      fontSize: '12px',
      border: `1px solid ${colors.gray[300]}`,
      borderRadius: spacing.radius,
      '&:hover, &.is-open': {
        borderColor: palette.gray[400],
      },

      display: 'inline-block',
      position: 'relative',
      '& .Select-control': {
        padding: OPTION_PADDING,
        paddingRight: '11px',
        display: 'flex',
      },

      '& .Select-multi-value-wrapper': {
        display: 'block',
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
        '& svg': {
          height: `${spacing.unit * 3 / 2}px`,
        },
      },

      '@global': {
        '.Select-menu-outer': {
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
      },
    },
    value: {
      display: 'inline-flex',
      justifyContent: 'start',
      cursor: 'default',
      '& svg': {
        height: `${spacing.unit * 3 / 2}px`,
      },
    },
    valueLabel: {
      marginLeft: [spacing.unit / 2],
      marginRight: [spacing.unit / 2],
    },
    optionLabel: {
      marginLeft: [spacing.unit / 2],
      marginRight: [spacing.unit / 2],
    },
  });
};
export default styles;
