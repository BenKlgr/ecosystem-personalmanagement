import moment from 'moment';
import crypto from 'crypto';
import { secret } from '../../../config/jwt.secretconfig.json';
import { sign, verify } from 'jsonwebtoken';
import { ITokenPayload } from '../../../types/Authentication';
import { User } from '../database/models/auth/User';
import { IRequest } from '../../../types/ExpressTypes';
import { Op } from 'sequelize';

export function getTokenFromRequest(request: IRequest): string | null {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) return null;

  const token = authorizationHeader.split(' ')[1];
  if (!token || token.length <= 0) return null;

  return token;
}

export async function getUserByToken(token: string): Promise<User | null> {
  const tokenPayload = getTokenPayload(token);

  if (!tokenPayload) return null;

  const { userId, email } = tokenPayload;

  const user = await User.findOne({
    where: {
      id: userId,
      email,
    },
  });

  return user;
}

export async function signIntoUser(
  usernameOrEmail: string,
  password: string
): Promise<string | null> {
  const user = await User.findOne({
    where: {
      password: hashPassword(password),
      [Op.or]: [
        {
          username: usernameOrEmail,
        },
        {
          email: usernameOrEmail,
        },
      ],
    },
  });

  if (!user) {
    return null;
  }

  return generateToken(user.id, user.email);
}

export async function registerUser(
  username: string,
  email: string,
  firstname: string,
  lastname: string,
  birthday: string,
  password: string
): Promise<User | null> {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        {
          username,
        },
        {
          email,
        },
      ],
    },
  });

  if (user) {
    return null;
  }

  const createdUser = await User.create({
    username,
    email,
    password: hashPassword(password),
    firstname,
    lastname,
    birthday: moment(birthday, 'DD.MM.YYYY').toDate(),
  });

  return createdUser;
}

export function getTokenPayload(token: string) {
  try {
    const decodedPayload = verify(token, secret) as ITokenPayload;
    return {
      userId: `${decodedPayload.userId}`,
      email: decodedPayload.email,
      createdAt: decodedPayload.createdAt,
    };
  } catch (error) {
    return null;
  }
}

export function generateToken(userId: string, email: string): string {
  const now = moment().format('DD.MM.YYYY');
  return sign({ userId, email, createdAt: now } as ITokenPayload, secret);
}

export function hashPassword(password: string): string {
  const hasher = crypto.createHash('sha512');
  return hasher.update(password).update(secret).digest('hex');
}
