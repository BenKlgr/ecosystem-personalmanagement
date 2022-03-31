import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/auth';
import { DefaultStateType } from '../../types/redux';
import { Axios, IdentityAxios } from '../../utils/axios';
import { AppDispatch } from '../store';

export type AuthState = DefaultStateType & {
  authenticated: boolean;
  user: User | null;
};

const initialState: AuthState = {
  loading: 'idle',
  authenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state: AuthState) => {
      if (state.loading == 'idle') state.loading = 'loading';
    },

    signInFailed: (state: AuthState) => {
      state.loading = 'error';
      state.authenticated = false;
      state.user = null;
    },

    getCurrentUserSuccess: (state: AuthState, action: PayloadAction<User>) => {
      state.loading = 'success';
      state.authenticated = true;
      state.user = action.payload;
    },

    getCurrentUserFailed: (state: AuthState) => {
      state.loading = 'success';
      state.authenticated = false;
      state.user = null;
    },

    signout: (state: AuthState) => {
      state.loading = 'success';
      state.authenticated = false;
      state.user = null;
    },
  },
});

export function SignIn(usernameOrEmail: string, password: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.startLoading());

    const response = await IdentityAxios.post('auth/', { usernameOrEmail, password });

    if (response.status != 200) {
      return dispatch(authSlice.actions.signInFailed());
    }

    if (response.data.status != 'ok') {
      return dispatch(authSlice.actions.signInFailed());
    }

    const token = response.data.payload;

    localStorage.setItem('ACCESS_TOKEN', token);

    return dispatch(GetCurrentUser());
  };
}

export function GetCurrentUser() {
  return async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.startLoading());

    const response = await IdentityAxios.get('auth/current');

    if (response.status != 200) {
      return dispatch(authSlice.actions.getCurrentUserFailed());
    }

    if (response.data.status != 'ok') {
      return dispatch(authSlice.actions.getCurrentUserFailed());
    }

    const user = response.data.payload;

    return dispatch(authSlice.actions.getCurrentUserSuccess(user as User));
  };
}

export function SignOut() {
  return async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.startLoading());

    localStorage.removeItem('ACCESS_TOKEN');

    return dispatch(authSlice.actions.signout());
  };
}

export const authReducer = authSlice.reducer;
