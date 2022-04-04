import { Router } from 'express';
import { User } from '../lib/database/models/auth/User';
import { Password } from '../lib/database/models/passwordManager/Password';
import { Ok, Failure } from '../lib/ResponseFunctions';
import AuthMiddleware from '../middleware/AuthMiddleware';

export const passwordManagerRouter = Router();

passwordManagerRouter.use(AuthMiddleware);

passwordManagerRouter.get('/passwords', async (req, res) => {
  const user = res.locals.user;
  const passwords = await Password.findAll({ where: { userId: user.id } });

  return res.json(Ok(passwords));
});

passwordManagerRouter.delete('/passwords/:id', async (req, res) => {
  const user = res.locals.user as User;
  const { id } = req.params;

  const passwordToDelete = await Password.findOne({
    where: {
      id,
      userId: user.id,
    },
  });

  passwordToDelete.destroy();

  return res.json(Ok('deleted'));
});

passwordManagerRouter.post('/passwords', async (req, res) => {
  const user = res.locals.user as User;
  const { service, password } = req.body;

  if (
    !(service && typeof service == 'string' && service.length > 0 && service.length < 512)
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
});

passwordManagerRouter.post('/passwords/:id/service', async (req, res) => {
  const user = res.locals.user;
  const { id } = req.params;
  const { service, password } = req.body;

  if (
    !(service && typeof service == 'string' && service.length > 0 && service.length < 512)
  )
    return res.json(Failure('invalid_body'));

  const passwordToUpdate = await Password.findOne({
    where: {
      id,
      userId: user.id,
    },
  });

  passwordToUpdate.update({ service });

  return res.json(Ok('updated_service'));
});
