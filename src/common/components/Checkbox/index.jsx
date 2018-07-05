import React from 'react';
import injectSheet from 'react-jss';
import Input from '../Input';
import styles from './styles';
import cn from 'classnames';

const Checkbox = props => (
  <Input
    {...props}
    checked={props.checked || props.value === true}
    type="checkbox"
    className={cn(props.className, props.classes.checkbox)}
  />
);

export default injectSheet(styles)(Checkbox);
