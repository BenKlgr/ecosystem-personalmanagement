import { IRequest, IResponse } from '../../types/ExpressTypes';
import { getUserByToken } from '../lib/auth/AuthenticationFunctions';

export default async function AuthMiddleware<IMiddlewareFunction>(
  req: IRequest,
  res: IResponse,
  next: Function
) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) return res.status(403).send();

  const token = authorizationHeader.split(' ')[1];
  if (!token) return res.status(403).send();

  const user = await getUserByToken(token);

  if (!user) return res.status(403).send();

  res.locals.user = user;
  next();
}
