import { IMiddlewareFunction } from '../../types/ExpressTypes';
import EndpointManager from '../lib/EndpointManager';
import AuthMiddleware from '../middleware/AuthMiddleware';
import LoggingMiddleware from '../middleware/LoggingMiddleware';
import BaseController from './BaseController';

export default class GeneralController extends BaseController {
  defaultMiddleware: IMiddlewareFunction[] = [LoggingMiddleware];
  public baseUrl: string = this.baseUrl + '/general';

  public registerRoutes(): void {
    this.get(
      '/endpoints',
      async (req, res) => {
        const endpoints = await EndpointManager.getEndpoints();
        res.json(endpoints);
      },
      { description: 'Overview over the API Endpoints' }
    );

    this.get(
      '/debug',
      async (req, res) => {
        res.json({ message: 'top-secret' });
      },
      { description: 'Overview over the API Endpoints', middlewares: [AuthMiddleware] }
    );
  }
}
