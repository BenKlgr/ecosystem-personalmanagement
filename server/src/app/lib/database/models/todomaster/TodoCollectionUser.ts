import { ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../auth/User';
import { TodoCollection } from './TodoCollection';

@Table({ tableName: 'todomaster_collectionusers' })
export class TodoCollectionUser extends Model<TodoCollectionUser> {
  @ForeignKey(() => User)
  userId: string;

  @ForeignKey(() => TodoCollection)
  collectionId: string;
}
