import express, { Express } from 'express';
import { host, port } from '../config/webserver.config.json';
import { log } from '../util/Logger';
import { IExpress } from '../types/ExpressTypes';
import GeneralController from './controller/GeneralController';
import DatabaseManager from './lib/database/DatabaseManager';
import cors from 'cors';
import PasswordManagerController from './controller/PasswordManagerController';
import ServeClientController from './controller/ServeClientController';

const WebServerSystem = {
  controllers: [GeneralController, PasswordManagerController, ServeClientController],
  middlewares: [],
};

export const Server: IExpress = express();

function WebServer() {
  DatabaseManager.connectDatabase();

  log('Applying use-functions.');
  Server.use(express.json());
  Server.use(cors());

  log('Loading Controllers.');
  WebServerSystem.controllers.forEach((Controller: any) => {
    new Controller(Server).registerRoutes();
  });

  Server.listen(port, host, () => {
    log(`WebServer started on ${host}:${port}`, 'info');
  });
}

export default WebServer;
