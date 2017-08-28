import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Popover from './popover';

import { Transition } from 'react-transition-group';

import cn from 'classnames';

import Icon from '../../../Icon';


class MobileNav extends Component {
    state = { open: false }

    handleClick = () =>
        this.setState({
            open: true
        })

    handleClose = () =>
        this.setState({
            open: false
        })

    render() {
        const { classes, links } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.burger} onClick={this.handleClick}>
                    <Icon name="hamburger" size={32} color='gray-0' />
                </div>


                <Transition in={this.state.open} timeout={300}>
                    {status => (
                        <div className={cn(classes.popover, classes[`${status}Popover`])}>
                            <Popover open={this.state.open} onClose={this.handleClose}>
                                <div className={classes.linksWrapper}>
                                    {links.map((link, index) => (
                                        <a
                                            key={`mobile_nav_link${index}`}
                                            href={link.href}
                                            className={classes.link}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </Popover>
                        </div>
                    )}
                </Transition>

            </div>
        )
    }
}


export default injectSheet(styles)(MobileNav);