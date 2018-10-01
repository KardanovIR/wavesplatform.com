import {
  createStore as createReduxStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

// middleware
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import customMiddleware from 'src/public/middleware';

// common reducers
import cookieConsentSnackbarReducer from 'src/public/reducers/cookieConsentSnackbar';

// common initial state
import getCommonInitialState from './getInitialState';

const createStore = (
  reducer = s => s,
  initialState = () => undefined,
  epic = () => Observable.empty()
) => {
  // reducer
  const appReducer = combineReducers({
    page: reducer,
    common: combineReducers({
      cookieConsentSnackbarOpen: cookieConsentSnackbarReducer,
    }),
  });

  // initial state
  const appInitialState = {
    page: initialState(),
    common: getCommonInitialState(),
  };

  const store = createReduxStore(
    // combine reducers here
    appReducer,
    appInitialState,
    compose(
      customMiddleware,
      applyMiddleware(thunk),
      applyMiddleware(createEpicMiddleware(epic)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

export { createStore };
