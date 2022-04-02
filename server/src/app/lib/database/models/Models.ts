import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from '@sequelize/core';
import DatabaseManager from '../DatabaseManager';

export class Password extends Model<
  InferAttributes<Password, {}>,
  InferCreationAttributes<Password, {}>
> {
  declare id: CreationOptional<number>;

  declare service: string;
  declare password: string;

  declare userId: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export async function defineModels() {
  const sequelize = DatabaseManager.getConnection();
  Password.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      service: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'Password', tableName: 'passwordmanager_passwords' }
  );

  await sequelize.sync();
}
