import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'modules/sagas';
const useDevTool = process.env.NODE_ENV === 'development';
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

export default (() => {
  const store = configureStore({
    reducer: {},
    devTools: useDevTool,
    middleware,
  });
  sagaMiddleWare.run(rootSaga);

  return store;
})();
