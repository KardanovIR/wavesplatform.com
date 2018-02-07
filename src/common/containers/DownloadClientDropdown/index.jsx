import React from 'react';
import pt from 'prop-types';

import Select from 'react-select';
import Null from 'src/common/components/Null';
import injectSheet from 'react-jss';
import styles from './styles';
import { ValueRenderer, OptionRenderer, ArrowRenderer } from './lib/Renderers';
import { OPTIONS } from './lib/constants';

class DownloadClientDropdown extends React.PureComponent {
  static propTypes = {
    onChange: pt.func,
    classes: pt.object,
  };

  static defaultProps = {
    onChange: _ => _,
  };

  render() {
    const { classes, onChange } = this.props;

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
        onChange={onChange}
      />
    );
  }
}

export default injectSheet(styles)(DownloadClientDropdown);
