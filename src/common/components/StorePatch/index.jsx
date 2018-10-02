import React from 'react';
import PropTypes from 'prop-types';

import { applySelectorToStore } from 'src/common/utils/state/applySelectorToStore';

const contextDefintion = { store: PropTypes.object.isRequired };

class StorePatch extends React.Component {
  static childContextTypes = contextDefintion;
  static contextTypes = contextDefintion;

  getChildContext() {
    const { selector } = this.props;
    const { store } = this.context;
    return {
      store: applySelectorToStore(selector, store),
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default StorePatch;
