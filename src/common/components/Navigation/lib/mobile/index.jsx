import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Popover from './popover';

import { Transition } from 'react-transition-group';

import cn from 'classnames';



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
                <div className={classes.burger} onClick={this.handleClick}>B</div>

                <Transition in={this.state.open} timeout={300}>
                    {status => (
                        <div className={cn(classes.popover, classes[`${status}Popover`])}>
                            <Popover open={this.state.open} onClose={this.handleClose}>
                                123
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                234
                            </Popover>
                        </div>
                    )}
                </Transition>

            </div>
        )
    }
}


export default injectSheet(styles)(MobileNav);