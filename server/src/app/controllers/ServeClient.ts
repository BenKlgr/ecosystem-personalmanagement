import { Router } from 'express';
import { join } from 'path';
import { IRequest, IResponse } from '../../types/ExpressTypes';
import { log } from '../../util/Logger';
import { Failure } from '../lib/ResponseFunctions';
import { mode } from '../../config/webserver.config.json';
import { Server } from '../WebServer';
const httpProxy = require('http-proxy');
import express from 'express';

export const serveClientRouter = Router();

if (mode == 'development') {
  serveClientRouter.get('*', async (req, res) => {
    try {
      const apiProxy = httpProxy.createProxyServer();
      apiProxy.web(req, res, { target: 'http://127.0.0.1:3000' });
    } catch (error) {
      log('Failed to connect to proxy', 'error');
      res.json(Failure('Backend proxy failed'));
    }
  });
} else {
  Server.use(express.static(join(__dirname, '..', '..', 'client', 'dist')));

  serveClientRouter.get('*', async (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  });
}
