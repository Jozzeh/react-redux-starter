// Redux store 

// EXAMPLE FOR REACT (async storage required for react native)
// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {createMigrate} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {migrations} from './migrations';

// Imports: Redux
import rootReducer from '../reducers/rootReducer';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'CountReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  version: 1,
  migrate: createMigrate(migrations, {debug: true}),
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
