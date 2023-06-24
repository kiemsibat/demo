import { clickedRouter } from './controllers/click.controller';
import express from 'express';

export const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: false }));

// Use swagger validator if needed
// apiRouter.use(openApiValidator);

[clickedRouter].forEach((router) => apiRouter.use(router));
