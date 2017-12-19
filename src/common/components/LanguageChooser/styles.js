const styles = ({ spacing, mixins, colors, palette }) => ({
  select: {
    border: `1px solid ${colors.gray[300]}`,
    borderRadius: spacing.radius,
    '&:hover, &.is-open': {
      borderColor: palette.gray[400],
    },

    display: 'inline-block',
    fontSize: '16px',
    position: 'relative',
    '& .Select-control': {
      padding: [spacing.unit * 2],
    },
    
    '& .Select-option': {
      cursor: 'pointer',
      color: colors.black.default,
      padding: [spacing.unit * 2],
      '&:hover': {
        backgroundColor: colors.gray[700],
      },
      '&.is-selected': {
        display: 'none'
      }
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
    display: 'inline-block',
    cursor: 'default',
  },
  valueLabel: {
    marginLeft: [spacing.unit / 2],
    marginRight: [spacing.unit / 2],
  },
});

export default styles;
