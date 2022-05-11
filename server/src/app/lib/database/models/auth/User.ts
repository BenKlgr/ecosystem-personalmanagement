import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { TodoCollection } from '../todomaster/TodoCollection';
import { TodoCollectionUser } from '../todomaster/TodoCollectionUser';

@Table({ tableName: 'auth_users' })
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING)
  id: string;

  @Column(DataType.STRING)
  username: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  firstname: string;

  @Column(DataType.STRING)
  lastname: string;

  @Column(DataType.DATE)
  birthday: Date;

  @BelongsToMany(() => TodoCollection, () => TodoCollectionUser)
  todoCollections: TodoCollection[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
