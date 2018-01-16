import React from 'react';

import cn from 'classnames';
import { cond } from 'ramda';
import injectSheet from 'react-jss';
import styles from './styles';

import Newtab from '!svg-react-loader!./img/newtab.svg';

const getIconElement = ({ icon, targetBlank }) =>
  cond([
    [() => icon !== undefined, () => icon],
    [() => Boolean(targetBlank), Newtab],
    [() => true, () => null],
  ])();
const Link = ({
  classes,
  className: classNameProp,
  inverted,
  primary,
  secondary,
  pseudo,
  textDecoration,
  sheet, // eslint-disable-line
  theme, // eslint-disable-line
  href,
  target,
  icon,
  children,
  ...rest
}) => {
  const targetBlank = target === '_blank' || target === 'blank';
  const Element = href ? 'a' : 'span';

  if (targetBlank && !href)
    throw new Error('A link with target="_blank" requires href attribute');

  const className = cn(
    {
      [classes.primary]: primary && !secondary && !inverted,
      [classes.inverted]: inverted,
      [classes.secondary]: secondary,
    },
    classNameProp
  );

  const iconElement = getIconElement({ icon, targetBlank });

  const classNameText = cn(classes.text, {
    [classes.pseudo]: pseudo,
    [classes.noDecoration]: !textDecoration,
    [classes.withPaddingForIcon]: !!iconElement,
  });

  return (
    <Element
      href={href}
      className={cn(classes.link, className, classes.noDecoration)}
      target={target}
      {...rest}
    >
      <span className={classNameText}>{children}</span>
      {iconElement && <span className={classes.icon}>{iconElement}</span>}
    </Element>
  );
};

Link.defaultProps = {
  textDecoration: true,
  primary: true,
};

export default injectSheet(styles)(Link);
