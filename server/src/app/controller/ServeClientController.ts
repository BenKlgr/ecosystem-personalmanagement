import { IMiddlewareFunction } from '../../types/ExpressTypes';
import EndpointManager from '../lib/EndpointManager';
import LoggingMiddleware from '../middleware/LoggingMiddleware';
import BaseController from './BaseController';
import { join } from 'path';
import { mode } from '../../config/webserver.config.json';
import { log } from '../../util/Logger';
import { Failure } from '../lib/ResponseFunctions';
const httpProxy = require('http-proxy');

export default class ServeClientController extends BaseController {
  defaultMiddleware: IMiddlewareFunction[] = [LoggingMiddleware];
  public baseUrl: string = '';

  public registerRoutes(): void {
    if (mode == 'development') {
      this.get(
        '*',
        async (req, res) => {
          try {
            const apiProxy = httpProxy.createProxyServer();
            apiProxy.web(req, res, { target: 'http://127.0.0.1:3000' });
          } catch (error) {
            log('Failed to connect to proxy', 'error');
            res.json(Failure('Backend proxy failed'));
          }
        },
        { description: 'React Frontend' }
      );
    } else {
      this.get(
        '*',
        async (req, res) => {
          res.sendFile(join(__dirname, '..', '..', 'Client', 'dist', 'index.html'));
        },
        { description: 'React Frontend' }
      );
    }
  }
}
