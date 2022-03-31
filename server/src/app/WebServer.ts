import express, { Express } from 'express';
import { host, port, mode } from '../config/webserver.config.json';
import { log } from '../util/Logger';
import { IExpress } from '../types/ExpressTypes';
import GeneralController from './controller/GeneralController';
import ServeClientController from './controller/ServeClientController';
import { join } from 'path';

const WebServerSystem = {
  controllers: [GeneralController, ServeClientController],
  middlewares: [],
};

export const Server: IExpress = express();

function WebServer() {
  if (mode != 'development')
    Server.use(express.static(join(__dirname, '..', '..', 'Client', 'dist')));

  WebServerSystem.controllers.forEach((Controller: any) => {
    new Controller(Server).registerRoutes();
  });

  Server.listen(port, host, () => {
    log(`WebServer started on ${host}:${port}`, 'info');
  });
}

export default WebServer;
