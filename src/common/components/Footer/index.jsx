import React from 'react';
import MQ from 'react-responsive';
import { query } from 'src/common/theme/breakpoints';
import styles from './styles';

import injectSheet from 'react-jss';
import cn from 'classnames';

import Logo from 'src/common/components/Logo';

import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';

import Social from './lib/Social';
import FooterNav from './lib/FooterNav';

import LanguageChooser from '../LanguageChooser';

import url from 'src/common/utils/url';

const Footer = ({ classes, links, hideCredentials, inverted }) => (
  <div className={classes.root}>
    <footer className={classes.footer}>
      <Row className={classes.row}>
        <Col xs={12} sm={12} md={6} className={classes.social}>
          <Social />
        </Col>
        <Col xs={12} sm={12} md={5} className={classes.nav}>
          <div className={classes.navWrapper}>
            <FooterNav links={links} />
          </div>
        </Col>

        <Col xs={6} md={6} className={classes.language}>
          <LanguageChooser inverted={inverted} />
        </Col>

        <Col xs={12} md={6} className={cn(classes.copyright, classes.textGray)}>
          <Link
            href={url('files.terms_conditions')}
            className={classes.terms}
            textDecoration={false}
            primary={false}
          >
            Terms and conditions
          </Link>
          <span>© Waves Platform</span>
          <MQ query={query.md}>
            <br />
          </MQ>
          {!hideCredentials && (
            <span>
              Made by{' '}
              <a href="https://ony.ru" className={classes.ony}>
                ONY
              </a>
            </span>
          )}
        </Col>

        <Col xs={6} md={1} className={classes.logo}>
          <a href={url('home')} className={classes.logoLink}>
            <Logo size="xs" />
          </a>
        </Col>
      </Row>
    </footer>
  </div>
);

export default injectSheet(styles)(Footer);
