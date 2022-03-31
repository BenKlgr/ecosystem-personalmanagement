import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import type { AppDispatch } from '../redux/store';

export type DefaultStateType = {
  loading: LoadingState;
};
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
