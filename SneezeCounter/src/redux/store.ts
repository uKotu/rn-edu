import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authenticationReducer from './features/authentication/authenticationSlice';



const rootReducer = combineReducers({
  authentication:authenticationReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;