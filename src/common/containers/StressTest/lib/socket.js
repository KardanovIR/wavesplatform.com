import io from 'socket.io-client';
import { Observable } from 'rxjs';


// const SOCKET_PATH = 'wss://stresstest.wavesplatform.com';
const SOCKET_PATH = 'localhost:3002';





// repeating socket actions transfer
export const forwardToSocket = socket => (reduxType, socketAction) => action$ =>
    action$
        .ofType(reduxType)
        .forEach(({ payload }) => socket.emit(socketAction, payload));

export const receiveFromSocket = socket => socketEvent =>
    Observable.create(observer => {
        socket.on(socketEvent, data => observer.next(data));
        return { dispose: socket.close };
    });




export default (onError = () => {}) => {
    const socket = io(SOCKET_PATH);

    socket
        .on('error', onError)
        .on('connect_error', onError)
        .on('connect_timeout', onError)
        .on('disconnect', onError);

    return socket;
}
