import { AES, enc } from 'crypto-js';

export function decryptPassword(password: string, cryptpass: string) {
  return AES.decrypt(password, cryptpass).toString(enc.Utf8);
}

export function encryptPassword(password: string, cryptpass: string) {
  return AES.encrypt(password, cryptpass).toString();
}
