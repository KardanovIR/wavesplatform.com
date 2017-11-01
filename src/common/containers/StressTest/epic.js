import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { prop } from 'ramda';

import {
    updateUnconfirmedTxs,
    updateConfirmedTxs,
    UPDATE_CONFIRMED_TXS,
    UPDATE_UNCONFIRMED_TXS,
    updateTime,
    START,
    FINISH,
    finish,
    error,
    ERROR,
    connect,
} from './ducks';

import initSocket, { forwardToSocket, receiveFromSocket } from './lib/socket';

const ERROR_TIMEOUT = 20000;
const TIMER_UPDATE_INTERVAL = 100;

// init socket and combine epics
export default (action$, store, ...args) => {
    const socket = initSocket(() => store.dispatch(error('fatal')));
    const forward = forwardToSocket(socket);

    const timer = action$ =>
        action$
            .ofType(UPDATE_UNCONFIRMED_TXS)
            .flatMap(() =>
                Observable.interval(TIMER_UPDATE_INTERVAL).takeUntil(
                    action$.ofType(FINISH)
                )
            )
            .takeUntil(action$.ofType(ERROR))
            .map(updateTime);

    const finishTest = (action$, { getState }) =>
        action$
            .ofType(UPDATE_CONFIRMED_TXS)
            .takeUntil(action$.ofType(ERROR))
            .filter(action => action.payload == getState().stressTest.total) // == on purpose, str/int comparison
            .map(finish);

    const balanceUpdate = action$ =>
        receiveFromSocket(socket)('balanceUpdate')
            .takeUntil(action$.ofType(ERROR))
            .map(prop('balance'))
            .map(updateConfirmedTxs);

    const utxUpdate = () =>
        receiveFromSocket(socket)('utxUpdate')
            .map(prop('trx'))
            .concatMap(
                trx =>
                    trx
                        ? Observable.of(updateUnconfirmedTxs(trx))
                        : Observable.of(error())
            );

    const socketConnect = () =>
        receiveFromSocket(socket)('connect').map(connect);

    const errorTimeout = action$ =>
        action$
            .ofType(START)
            .flatMap(() => Observable.timer(ERROR_TIMEOUT))
            .takeUntil(action$.ofType(UPDATE_UNCONFIRMED_TXS))
            .map(error);

    return combineEpics(
        balanceUpdate,
        finishTest,
        utxUpdate,
        timer,
        errorTimeout,
        socketConnect,
        forward(START, 'startTest')
    )(action$, store, ...args);
};
