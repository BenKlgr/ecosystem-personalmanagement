import { DatabaseEntry } from './general';

export type Password = {
  id: number;
  service: string;
  password: string;
} & DatabaseEntry;
