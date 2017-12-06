import palette from "../../theme/palette";

const setPlaceholderColor = color => ({
  '&::-webkit-input-placeholder': {
    color,
  },
  '&::-moz-placeholder': {
    color,
  },
  '&:-ms-placeholder': {
    color,
  },
  '&::-ms-input-placeholder': {
    color,
  },
});

const styles = theme => ({
  root: {
    ...theme.typography.body,

    fontWeight: 500,

    // RESET default browser styles
    margin: 0,
    outline: 'none',
    border: 0,

    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',

    borderRadius: theme.spacing.radius,

    boxSizing: 'border-box',
    padding: theme.spacing.getSpacing(0, 1.5),

    transition: theme.transitions.create(['background-color']),

    '&::-moz-placeholder': {
      opacity: 1,
    },
  },
  primary: {
    backgroundColor: theme.palette.gray[1000],
    color: theme.palette.gray[0],
    border: `1px solid ${theme.palette.gray[0]}`,

    ...setPlaceholderColor(theme.palette.gray[0]),
  },
  secondary: {
    backgroundColor: theme.palette.gray[0],
    color: theme.palette.primary[700],

    border: `1px solid ${theme.palette.gray[400]}`,

    '&:focus': {
      borderColor: theme.palette.primary[700],
    },

    ...setPlaceholderColor(theme.palette.grayBlue[400]),
  },
  input: {
    height: theme.spacing.inputHeight,
    lineHeight: `${theme.spacing.inputHeight}px`,
  },
  textarea: {
    resize: 'none',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  disabled: {
    opacity: 0.6,
    pointerEvents: 'none',
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${theme.palette.danger[500]}`,
  },
});

export default styles;
