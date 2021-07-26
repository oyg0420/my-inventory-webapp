import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'modules/sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from 'modules/reducers';

const useDevTool = process.env.NODE_ENV === 'development';
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (() => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: useDevTool,
    middleware,
  });
  sagaMiddleWare.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
})();
