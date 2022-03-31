import { useEffect } from 'react';
import { RootState } from '../redux/rootReducer';
import { GetCurrentUser, SignOut } from '../redux/slices/auth';
import { User } from '../types/auth';
import { LoadingState, useAppDispatch, useAppSelector } from '../types/redux';

export default function useAuth() {
  const dispatch = useAppDispatch();

  const authenticated = useAppSelector((state: RootState) => state.auth.authenticated);
  const loading = useAppSelector((state: RootState) => state.auth.loading);
  const user = useAppSelector((state: RootState) => state.auth.user);

  const signOutFunction = () => {
    dispatch(SignOut());
  };

  useEffect(() => {
    dispatch(GetCurrentUser());
  }, []);

  return [user, authenticated, loading, signOutFunction] as [
    User | null,
    boolean,
    LoadingState,
    Function
  ];
}
