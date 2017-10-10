import io from 'socket.io-client';

import { combineEpics } from 'redux-observable';

import { Observable } from 'rxjs'


import {
    updateConfirmedTxs,
    updateTime,
    START,
    FINISH
} from './ducks';



// repeating socket actions transfer
const forwardToSocket = (socket) => (reduxType, socketAction) =>
    action$ => action$.ofType(reduxType)
        .forEach(({ payload }) => socket.emit(socketAction, payload))


const receiveFromSocket = socket => socketEvent =>
    Observable
        .create(observer => {
            socket.on(socketEvent, data => observer.next(data))
            return { dispose: socket.close }
        })



const timer = action$ =>
    action$.ofType(START)
        .flatMap(() => Observable.interval(1000).takeUntil(action$.ofType(FINISH)))
        .map(updateTime)



// init socket and combine epics
export default action$ => {
    // const socket = io('localhost:3002');

    // const forward = forwardToSocket(socket);

    // const balanceUpdate = () => receiveFromSocket(socket)('balanceUpdate')
        // .map(({ balance }) => updateConfirmedTxs(balance));


    return combineEpics(
        // balanceUpdate,
        timer,
        // forward(START, 'startTest')
    )(action$)
}