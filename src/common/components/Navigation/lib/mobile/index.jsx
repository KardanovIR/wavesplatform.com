import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import Popover from './popover';


class MobileNav extends Component {
    state = {
        open: false,
        // anchorEl: undefined
    }

    handleClick = e =>
        this.setState(prevState => ({
            open: !prevState.open,
            // anchorEl: e.currentTarget
        }))

    render() {
        const { classes, links } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.burger} onClick={this.handleClick}>B</div>

                {this.state.open && (
                    <Popover onClose={this.handleClick}>
                        123
                </Popover>
                )}

                {/* <div className={classes.navContainer}>

                <div className={classes.mobileNav}>
                    <MobileNav />
                </div>
            </div> */}
            </div>
        )
    }
}


export default injectSheet(styles)(MobileNav);