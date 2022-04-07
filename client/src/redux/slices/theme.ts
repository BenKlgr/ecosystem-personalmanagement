import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

export type ThemeState = {
  mode: 'dark' | 'light';
};

const initialState: ThemeState = {
  mode: (localStorage.getItem('THEME_MODE') as 'light' | 'dark') || 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state: ThemeState, action: PayloadAction<'dark' | 'light'>) => {
      localStorage.setItem('THEME_MODE', action.payload);
      state.mode = action.payload;
    },
  },
});

export function SetThemeMode(mode: 'light' | 'dark') {
  return async (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.setMode(mode));
  };
}

export const themeReducer = themeSlice.reducer;
