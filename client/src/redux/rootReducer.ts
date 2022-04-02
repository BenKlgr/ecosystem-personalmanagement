import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { passwordsReducer } from './slices/passwords';

export const rootReducer = combineReducers({
  auth: authReducer,
  passwords: passwordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
