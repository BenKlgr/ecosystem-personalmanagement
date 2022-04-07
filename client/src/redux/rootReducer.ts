import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { passwordsReducer } from './slices/passwords';
import { themeReducer } from './slices/theme';

export const rootReducer = combineReducers({
  auth: authReducer,
  passwords: passwordsReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
