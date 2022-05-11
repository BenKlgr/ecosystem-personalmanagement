import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { themeReducer } from './slices/theme';
import { todoMasterReducer } from './slices/todomaster';

export const rootReducer = combineReducers({
  auth: authReducer,
  todoMaster: todoMasterReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
