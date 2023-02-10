import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import themeReducer from './features/theme';
import leftMenuReducer from './features/left-menu';
import popupReducer from './features/popup';
import queriesReducer from './features/queries';
import viewReducer from './features/view';
import tamplatesSlice from './features/tamplates';
import popupTamplateSlice from './features/popup-tamplate';
import popupConnectorSlice from './features/popup-connector';

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    leftMenu: leftMenuReducer,
    popup: popupReducer,
    queries: queriesReducer,
    view: viewReducer,
    tamplates: tamplatesSlice,
    popupTamplate: popupTamplateSlice,
    popupConnector:popupConnectorSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})