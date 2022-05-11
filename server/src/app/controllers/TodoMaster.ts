import { Router } from 'express';
import { getUserTodoCollections } from '../lib/auth/TodomasterFunctions';
import { User } from '../lib/database/models/auth/User';
import { Password } from '../lib/database/models/passwordManager/Password';
import { Ok, Failure } from '../lib/ResponseFunctions';
import AuthMiddleware from '../middleware/AuthMiddleware';

export const todoMasterRouter = Router();

todoMasterRouter.use(AuthMiddleware);

todoMasterRouter.get('/entry/all', async (req, res) => {
  const user: User = res.locals.user;
  const collections = await getUserTodoCollections(user.id);

  if (!collections) return res.json(Failure('failed_receiving_collections'));

  return res.json(Ok(collections));
});
