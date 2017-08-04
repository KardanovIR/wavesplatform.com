import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Popover from './popover';

import { Transition } from 'react-transition-group';

import cn from 'classnames';

import Icon from '../../../Icon';


class MobileNav extends Component {
    state = {
        open: false,
        // anchorEl: undefined
    }

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
                    <Icon name="hamburger" size={32}  />
                </div>
                

                <Transition in={this.state.open} timeout={300}>
                    {status => (
                        <div className={cn(classes.popover, classes[`${status}Popover`])}>
                            <Popover open={this.state.open} onClose={this.handleClose}>
                                <br/>
                                123
                                <br />
                                <br />
                                234
                                <br />
                                <br/>
                            </Popover>
                        </div>
                    )}
                </Transition>

            </div>
        )
    }
}


export default injectSheet(styles)(MobileNav);