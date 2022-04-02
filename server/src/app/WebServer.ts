import cors from 'cors';
import express from 'express';
import { host, port } from '../config/webserver.config.json';
import { IExpress } from '../types/ExpressTypes';
import { log } from '../util/Logger';
import { authenticationRouter } from './controllers/Authentication';
import { passwordManagerRouter } from './controllers/PasswordManager';
import { serveClientRouter } from './controllers/ServeClient';
import DatabaseManager from './lib/database/DatabaseManager';
import LoggingMiddleware from './middleware/LoggingMiddleware';
export const Server: IExpress = express();

function WebServer() {
  DatabaseManager.connectDatabase();

  log('Applying use-functions.');
  Server.use(express.json());
  Server.use(cors());
  Server.use(LoggingMiddleware);

  log('Loading Controllers.');
  Server.use('/api/passwordmanager', passwordManagerRouter);
  Server.use('/api/auth', authenticationRouter);

  Server.use('', serveClientRouter);

  Server.listen(port, host, () => {
    log(`WebServer started on ${host}:${port}`, 'info');
  });
}

export default WebServer;
