import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultStateType } from '../../types/redux';
import { TodoCollection } from '../../types/todomaster';
import { Axios } from '../../utils/axios';
import { AppDispatch } from '../store';

export type TodoMasterState = DefaultStateType & {
  collections: TodoCollection[];
};

const initialState: TodoMasterState = {
  loading: 'idle',
  collections: [],
};

export const todoMasterSlice = createSlice({
  name: 'todomaster',
  initialState,
  reducers: {
    startLoading: (state: TodoMasterState) => {
      if (state.loading == 'idle') state.loading = 'loading';
    },

    getCollectionsSuccess: (
      state: TodoMasterState,
      action: PayloadAction<TodoCollection[]>
    ) => {
      state.loading = 'success';
      state.collections = action.payload;
    },

    getCollectionsFailed: (state: TodoMasterState) => {
      state.loading = 'error';
    },
  },
});

export function GetTodoCollections() {
  return async (dispatch: AppDispatch) => {
    dispatch(todoMasterSlice.actions.startLoading());

    const response = await Axios.get('todomaster/entry/all');

    if (response.status != 200) {
      return dispatch(todoMasterSlice.actions.getCollectionsFailed());
    }

    if (response.data.status != 'ok') {
      return dispatch(todoMasterSlice.actions.getCollectionsFailed());
    }

    const collections = response.data.payload;

    return dispatch(
      todoMasterSlice.actions.getCollectionsSuccess(collections as TodoCollection[])
    );
  };
}

export const todoMasterReducer = todoMasterSlice.reducer;
