import { Router } from 'express';
import { IRequest, IResponse } from '../../types/ExpressTypes';
import { log } from '../../util/Logger';
import {
  getTokenFromRequest,
  getUserByToken,
  registerUser,
  signIntoUser,
} from '../lib/auth/AuthenticationFunctions';
import { Failure, Ok } from '../lib/ResponseFunctions';

export const authenticationRouter = Router();

authenticationRouter.get('/current', async (req: IRequest, res: IResponse) => {
  const token = getTokenFromRequest(req);
  if (!token) return res.json(Failure('invalid_token'));

  const user = await getUserByToken(token);
  if (!user) return res.json(Failure('invalid_token'));

  return res.json(Ok(user));
});

authenticationRouter.post('/user/authenticate', async (req: IRequest, res: IResponse) => {
  const { usernameOrEmail, password } = req.body;

  if (!(usernameOrEmail && password)) {
    return res.json(Failure('invalid_body'));
  }
  const token: string | null = await signIntoUser(usernameOrEmail, password);

  if (!token) {
    return res.json(Failure('invalid_credentials'));
  } else {
    return res.json(Ok(token));
  }
});

authenticationRouter.post('/user/new', async (req: IRequest, res: IResponse) => {
  const { username, email, firstname, lastname, birthday, password } = req.body;

  if (!(username && email && firstname && lastname && birthday && password)) {
    return res.json(Failure('invalid_body'));
  }

  const createdUser = await registerUser(
    username,
    email,
    firstname,
    lastname,
    birthday,
    password
  );

  if (!createdUser) return res.json(Failure('failed'));

  return res.json(Ok(createdUser));
});
