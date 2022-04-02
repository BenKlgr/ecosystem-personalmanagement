import { IMiddlewareFunction } from '../../types/ExpressTypes';
import DatabaseManager from '../lib/database/DatabaseManager';
import { Password } from '../lib/database/models/Password';
import { Failure, Ok } from '../lib/ResponseFunctions';
import AuthMiddleware from '../middleware/AuthMiddleware';
import LoggingMiddleware from '../middleware/LoggingMiddleware';
import BaseController from './BaseController';

export default class PasswordManagerController extends BaseController {
  defaultMiddleware: IMiddlewareFunction[] = [LoggingMiddleware, AuthMiddleware];
  public baseUrl: string = this.baseUrl + '/passwordmanager';

  public registerRoutes(): void {
    this.get(
      '/passwords',
      async (req, res) => {
        const user = res.locals.user;
        const passwords = await Password.findAll({ where: { userId: user.id } });

        return res.json(Ok(passwords));
      },
      { description: 'Get all user passwords' }
    );

    this.delete(
      '/passwords/:id',
      async (req, res) => {
        const user = res.locals.user;
        const { id } = req.params;

        let passwordId;

        try {
          passwordId = parseInt(id);
        } catch (error) {
          return res.json(Failure('invalid_params'));
        }

        const passwordToDelete = await Password.findOne({
          where: {
            id: passwordId,
            userId: user.id,
          },
        });

        passwordToDelete.destroy();

        return res.json(Ok('deleted'));
      },
      { description: 'Create a new password' }
    );

    this.post(
      '/passwords',
      async (req, res) => {
        const user = res.locals.user;
        const { service, password } = req.body;

        if (
          !(
            service &&
            typeof service == 'string' &&
            service.length > 0 &&
            service.length < 512
          )
        )
          return res.json(Failure('invalid_body'));
        if (
          !(
            password &&
            typeof password == 'string' &&
            password.length > 0 &&
            password.length < 1024
          )
        )
          return res.json(Failure('invalid_body'));

        const createdPassword = await Password.create({
          service,
          password,
          userId: user.id,
        });

        return res.json(Ok(createdPassword));
      },
      { description: 'Create a new password' }
    );

    this.post(
      '/passwords/:id/service',
      async (req, res) => {
        const user = res.locals.user;
        const { id } = req.params;
        const { service, password } = req.body;

        if (
          !(
            service &&
            typeof service == 'string' &&
            service.length > 0 &&
            service.length < 512
          )
        )
          return res.json(Failure('invalid_body'));

        let passwordId;

        try {
          passwordId = parseInt(id);
        } catch (error) {
          return res.json(Failure('invalid_params'));
        }

        const passwordToUpdate = await Password.findOne({
          where: {
            id: passwordId,
            userId: user.id,
          },
        });

        passwordToUpdate.update({ service });

        return res.json(Ok('updated_service'));
      },
      { description: 'Create a new password' }
    );
  }
}
