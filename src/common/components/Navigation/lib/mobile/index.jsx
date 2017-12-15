import React, { Component } from 'react';
import styles from './styles';

import injectSheet from 'react-jss';

import cn from 'classnames';

import Logo from 'src/common/components/Logo';
import Popup from 'src/common/components/Popup';
import url from "../../../../utils/url";

const burger = {
  root: {
    position: 'relative',
    height: 12,
    width: 27,
    padding: 0,
    appearance: 'none',
    border: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    outline: 'none',
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
  inverted: {
    backgroundColor: '#fff',
  },
  barOpen: {
    transform: 'translate(0, 0)',
  },
};

const Burger = injectSheet(burger)(({ classes, open, inverted }) => (
  <button className={cn(classes.root, { [classes.open]: open })}>
    <div className={cn(classes.bar, { [classes.barOpen]: open, [classes.inverted]: inverted })} />
    <div className={cn(classes.bar, { [classes.barOpen]: open, [classes.inverted]: inverted })} />
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
    const { classes, links, inverted } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.burger} onClick={this.handleClick}>
          <Burger open={this.state.open} inverted={inverted} />
        </div>

        <Popup show={this.state.open} onClose={this.handleClose} inverted>
          <div className={classes.linksWrapper}>
            <div className={classes.logo}>
              <a href={url('home')}>
                <Logo
                  color={'#fff'}
                  flat
                />
              </a>
            </div>

            {links.filter(link => !link.hideInMenu).map((link, index) => (
              <a
                key={`mobile_nav_link${index}`}
                href={link.href}
                className={cn(classes.link, { [classes.linkSecondary]: link.type === 'secondary' })}
              >
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
