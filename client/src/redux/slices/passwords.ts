// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Password } from '../../types/passwords';
// import { DefaultStateType } from '../../types/redux';
// import { Axios } from '../../utils/axios';
// import { AppDispatch } from '../store';

// export type PasswordsState = DefaultStateType & {
//   passwords: Password[];
//   decryptionPassword: string | null;
// };

// const initialState: PasswordsState = {
//   loading: 'idle',
//   passwords: [],
//   decryptionPassword: null,
// };

// export const passwordsSlice = createSlice({
//   name: 'passwords',
//   initialState,
//   reducers: {
//     startLoading: (state: PasswordsState) => {
//       if (state.loading == 'idle') state.loading = 'loading';
//     },

//     getPasswordsSuccess: (state: PasswordsState, action: PayloadAction<Password[]>) => {
//       state.loading = 'success';
//       state.passwords = action.payload;
//     },

//     getPasswordsFailed: (state: PasswordsState) => {
//       state.loading = 'error';
//       state.passwords = [];
//     },

//     setDecryptionPassword: (
//       state: PasswordsState,
//       action: PayloadAction<string | null>
//     ) => {
//       state.decryptionPassword = action.payload;
//     },
//   },
// });

// export function GetPasswords() {
//   return async (dispatch: AppDispatch) => {
//     dispatch(passwordsSlice.actions.startLoading());

//     const response = await Axios.get('passwordmanager/passwords');

//     if (response.status != 200) {
//       return dispatch(passwordsSlice.actions.getPasswordsFailed());
//     }

//     if (response.data.status != 'ok') {
//       return dispatch(passwordsSlice.actions.getPasswordsFailed());
//     }

//     const passwords = response.data.payload;

//     return dispatch(passwordsSlice.actions.getPasswordsSuccess(passwords as Password[]));
//   };
// }

// export function DeletePassword(passwordId: string) {
//   return async (dispatch: AppDispatch) => {
//     dispatch(passwordsSlice.actions.startLoading());

//     const response = await Axios.delete(`passwordmanager/passwords/${passwordId}`);

//     return dispatch(GetPasswords());
//   };
// }

// export function CreatePassword(service: string, password: string) {
//   return async (dispatch: AppDispatch) => {
//     dispatch(passwordsSlice.actions.startLoading());

//     const response = await Axios.post(`passwordmanager/passwords`, { service, password });

//     return dispatch(GetPasswords());
//   };
// }

// export function UpdatePasswordService(passwordId: string, newService: string) {
//   return async (dispatch: AppDispatch) => {
//     dispatch(passwordsSlice.actions.startLoading());

//     const response = await Axios.post(`passwordmanager/passwords/${passwordId}/service`, {
//       service: newService,
//     });

//     return dispatch(GetPasswords());
//   };
// }

// export function SetDecryptionPassword(password: string | null) {
//   return async (dispatch: AppDispatch) => {
//     dispatch(passwordsSlice.actions.setDecryptionPassword(password));
//   };
// }

// export const passwordsReducer = passwordsSlice.reducer;
export default null;
