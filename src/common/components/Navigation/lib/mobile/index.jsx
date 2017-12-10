import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import cn from 'classnames';

import Popup from 'src/common/components/Popup';

const burger = {
  root: {
    position: 'relative',
    height: 12,
    width: 27,
  },
  bar: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: '#000',
    transition: 'transform .25s ease-out',
    '&:first-child': {
      transform: 'translate(0, -5px)',
    },
    '&:last-child': {
      transform: 'translate(0, 5px)',
    },
  },
  barOpen: {
    transform: 'translate(0, 0)',
  },
};

const Burger = injectSheet(burger)(({ classes, open }) => (
  <button className={cn(classes.root, { [classes.open]: open })}>
    <div className={cn(classes.bar, { [classes.barOpen]: open })} />
    <div className={cn(classes.bar, { [classes.barOpen]: open })} />
  </button>
));

class MobileNav extends Component {
  state = { open: false };

  handleClick = () =>
    this.setState({
      open: true,
    });

  handleClose = () =>
    this.setState({
      open: false,
    });

  render() {
    const { classes, links } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.burger} onClick={this.handleClick}>
          <Burger open={this.state.open} />
        </div>

        <Popup show={this.state.open} onClose={this.handleClose} inverted>
          <div className={classes.linksWrapper}>
            {links.map((link, index) => (
              <a key={`mobile_nav_link${index}`} href={link.href} className={classes.link}>
                {link.text}
              </a>
            ))}
          </div>
        </Popup>
      </div>
    );
  }
}

export default injectSheet(styles)(MobileNav);
