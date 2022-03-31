import { DatabaseEntry } from './general';

export type User = {
  id: number;
  username: string;
  email: string;

  firstname: string;
  lastname: string;
  birthday: string;
} & DatabaseEntry;
