import { IRequest, IResponse } from '../../types/ExpressTypes';
import { identityServerAddress } from '../../config/identity.config.json';
import axios from 'axios';

export default async function AuthMiddleware<IMiddlewareFunction>(
  req: IRequest,
  res: IResponse,
  next: Function
) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) return res.status(403).send();

  const token = authorizationHeader.split(' ')[1];

  if (!token) return res.status(403).send();

  let data;

  try {
    const response = await axios.get(`${identityServerAddress}/auth/token/${token}`);
    data = response.data;
  } catch (error) {
    return res.status(503).send();
  }

  if (data.status == 'ok') {
    // Authorized
    next();
  } else {
    // Unauthorized
    return res.status(401).send();
  }
}
