import { createStore as createReduxStore, combineReducers } from 'redux';

// common
import { reducer as cookieConsentReducer } from 'src/public/containers/CookieConsent';

const createStore = (reducer = (s = null) => s, initialState) => {
  // reducer
  const appReducer = combineReducers({
    page: reducer,
    common: combineReducers({
      cookieConsent: cookieConsentReducer,
    }),
  });

  // initial state
  const appInitialState = {
    page: initialState,
  };

  const store = createReduxStore(appReducer, appInitialState);

  return store;
};

export { createStore };
