import { all, call, delay, spawn } from 'redux-saga/effects';
import { sessionSaga } from 'modules/session/saga';

const sagas = [sessionSaga];

export default function* rootSaga(): Generator {
  /**
   * Prevent root saga killed
   * @see https://github.com/redux-saga/redux-saga/issues/760#issuecomment-273737022
   */
  yield all(
    sagas.map(saga => {
      return spawn(function* task() {
        while (true) {
          try {
            yield call(saga);
            console.error(
              'unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!',
              saga
            );
          } catch (e) {
            console.error('Saga error, the saga will be restarted', e);
          }
          yield delay(1000); // Avoid infinite failures blocking app
        }
      });
    })
  );
}
