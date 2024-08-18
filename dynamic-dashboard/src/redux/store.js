// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


const store = configureStore({
  reducer:rootReducer,
  devTools: window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
});

export default store;