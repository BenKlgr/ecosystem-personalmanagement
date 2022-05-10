import { Sequelize } from 'sequelize-typescript';
import { connectionString } from '../../../config/database.secretconfig.json';
import { log } from '../../../util/Logger';
import { User } from './models/auth/User';
import { TodoCollection } from './models/todomaster/TodoCollection';
import { TodoCollectionUser } from './models/todomaster/TodoCollectionUser';
import { TodoEntry } from './models/todomaster/TodoEntry';

export default class DatabaseManager {
  private static Connection: Sequelize;

  static async connectDatabase(): Promise<any> {
    this.Connection = new Sequelize(connectionString, {
      logging: false,
      models: [User, TodoCollection, TodoEntry, TodoCollectionUser],
    });
    try {
      await this.Connection.authenticate();
      log('Connected to the database', 'info');
      await this.Connection.sync();
      log('Synced Models', 'info');
    } catch (error) {
      console.log(error);
      log(`Failed connecting to the database with '${connectionString}'`, 'error', false);
    }
  }

  static getConnection(): Sequelize {
    return DatabaseManager.Connection;
  }
}
