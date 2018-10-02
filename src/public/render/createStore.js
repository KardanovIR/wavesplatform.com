import {
  createStore as createReduxStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

// middleware
import thunk from 'redux-thunk';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import customMiddleware from 'src/public/middleware';

// common
// cookieConsent
import {
  reducer as cookieConsentReducer,
  epic as cookieConsentEpic,
} from 'src/public/containers/CookieConsent';

import { patchEpicStore } from 'src/common/utils/state/patchEpicStore';

const createStore = (
  reducer = (s = null) => s,
  initialState,
  epic = () => Observable.empty()
) => {
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

  const appEpic = combineEpics(
    epic,
    patchEpicStore(s => s.common.cookieConsent, cookieConsentEpic)
  );

  const store = createReduxStore(
    // combine reducers here
    appReducer,
    appInitialState,
    compose(
      customMiddleware,
      applyMiddleware(thunk),
      applyMiddleware(createEpicMiddleware(appEpic)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

export { createStore };
