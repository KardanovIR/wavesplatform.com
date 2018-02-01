import React from 'react';

import Select from 'react-select';
import Null from 'src/common/components/Null';
import injectSheet from 'react-jss';
import styles from './styles';
import { ValueRenderer, OptionRenderer, ArrowRenderer } from './lib/Renderers';

import { connect } from 'react-redux';

import {
  getElectronWindowsClick,
  getElectronMacClick,
  getElectronLinuxClick,
} from 'src/public/actions';



// Analytics
const HANDLERS = {
  Windows: 'onWindowsClick',
  Mac: 'onMacClick',
  Linux: 'onLinuxClick',
};

export const withHandlers = connect(undefined, (dispatch, { logSettings }) => {
  const createHandler = handler => () => dispatch(handler(logSettings));
  return ({
    [HANDLERS.Windows]: createHandler(getElectronWindowsClick),
    [HANDLERS.Mac]: createHandler(getElectronMacClick),
    [HANDLERS.Linux]: createHandler(getElectronLinuxClick)
  });
});

const OPTIONS = [
  { value: 'initial', label: 'cta.getClient' },
  // {
  //   value: 'Windows',
  //   label: 'cta.getClient.windows',
  //   link: 'https://s3.ca-central-1.amazonaws.com/wavesdb.com/WavesClient-1.0.0-beta.10-win.zip',
  //   clickHandler: HANDLERS.Windows,
  // },
  {
    value: 'Mac',
    label: 'cta.getClient.mac',
    link: 'https://s3.ca-central-1.amazonaws.com/wavesdb.com/WavesClient-1.0.0-beta.10-mac.dmg',
    clickHandler: HANDLERS.Mac,
  },
  {
    value: 'Linux',
    label: 'cta.getClient.linux',
    link: 'https://s3.ca-central-1.amazonaws.com/wavesdb.com/WavesClient-1.0.0-beta.10-linux.deb',
    clickHandler: HANDLERS.Linux,
  },
];

class DownloadClientDropdown extends React.PureComponent {
  handleChange = e =>
    e &&
    e.clickHandler &&
    this.props[e.clickHandler] &&
    this.props[e.clickHandler]();

  render() {
    const { classes } = this.props;

    return (
      <Select
        className={classes.select}
        arrowRenderer={ArrowRenderer}
        options={OPTIONS}
        optionComponent={OptionRenderer}
        valueComponent={ValueRenderer}
        searchable={false}
        value="initial"
        clearRenderer={Null}
        onChange={this.handleChange}
      />
    );
  }
}


export default injectSheet(styles)(withHandlers(DownloadClientDropdown));
