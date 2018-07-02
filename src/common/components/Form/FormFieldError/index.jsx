import React from 'react';
import injectSheet from 'react-jss';
import Typography from 'src/common/components/Typography';

const stylesError = theme => ({
  error: {
    color: theme.palette.danger[500],
  },
});
const FormFieldError = injectSheet(stylesError)(
  ({ classes, children, inverted }) => (
    <Typography type="quote" inverted={inverted} className={classes.error}>
      {children}
    </Typography>
  )
);
export default FormFieldError;
