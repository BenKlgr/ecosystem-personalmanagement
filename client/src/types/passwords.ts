import { DatabaseEntry } from './general';

export type Password = {
  id: string;
  service: string;
  password: string;
} & DatabaseEntry;
