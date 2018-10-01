import React from 'react';
import PropTypes from 'prop-types';

const contextDefintion = { store: PropTypes.object.isRequired };

class StorePatch extends React.Component {
  static childContextTypes = contextDefintion;
  static contextTypes = contextDefintion;

  getChildContext() {
    const { selector } = this.props;
    const { store } = this.context;

    const getState = () => selector(store.getState());

    return {
      store: {
        ...store,
        getState,
      },
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default StorePatch;
