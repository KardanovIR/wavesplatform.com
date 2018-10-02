import { combineEpics } from 'redux-observable';
import { cond, equals } from 'ramda';

import {
  ALLOW_ALL,
  ESSENTIALS_ONLY,
  MOUNT,
  allowAll,
  essentialsOnly,
  reset,
} from '../actions';

import { localStorageConsent, initTags } from './effects';

const init$ = action$ =>
  action$
    .ofType(MOUNT)
    .map(localStorageConsent.get)
    .map(
      cond([
        [equals(0), reset],
        [equals(1), allowAll],
        [equals(-1), essentialsOnly],
      ])
    );

const allow$ = action$ =>
  action$
    .ofType(ALLOW_ALL)
    .take(1)
    .do(() => {
      localStorageConsent.set(1);
      initTags();
    })
    .ignoreElements();

const essentialsOnly$ = action$ =>
  action$
    .ofType(ESSENTIALS_ONLY)
    .map(localStorageConsent.get)
    .filter(x => x !== -1)
    .do(consentWasGiven => {
      localStorageConsent.set(-1);
      if (consentWasGiven === 1) location.reload();
    })
    .ignoreElements();

export default combineEpics(init$, allow$, essentialsOnly$);
