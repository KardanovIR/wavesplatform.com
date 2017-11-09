import React from 'react';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

import Newtab from '!svg-react-loader!./img/newtab.svg';

const Link = ({
    classes,
    className: classNameProp,
    inverted,
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
            [classes.primary]: !secondary && !inverted,
            [classes.inverted]: inverted,
            [classes.secondary]: secondary,
        },
        classNameProp
    );

    const classNameText = cn(classes.text, {
        [classes.pseudo]: pseudo,
        [classes.noDecoration]: !textDecoration,
    });

    const iconElement =
        icon !== undefined ? icon : targetBlank ? <Newtab /> : null;

    return (
        <Element
            href={href}
            className={cn(classes.link, className, classes.noDecoration)}
            target={target}
            {...rest}
        >
            <span href={href} className={classNameText}>
                {children}
            </span>
            {!!iconElement && (
                <span className={classes.icon}>{iconElement}</span>
            )}
        </Element>
    );
};

Link.defaultProps = {
    textDecoration: true,
};

export default injectSheet(styles)(Link);
