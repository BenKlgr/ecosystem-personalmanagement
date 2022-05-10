import {
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from '../auth/User';
import { TodoCollectionUser } from './TodoCollectionUser';

@Table({ tableName: 'todomaster_collections' })
export class TodoCollection extends Model<TodoCollection> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING)
  id: string;

  @Column(DataType.STRING)
  title: string;

  @Default('#A1A1A1')
  @Column(DataType.STRING)
  color: string;

  @BelongsToMany(() => User, () => TodoCollectionUser)
  users: User[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
