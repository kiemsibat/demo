import express from 'express';
import cors from 'cors';
import { apiRouter } from './api.router';
import configLogger from './core/config-logger';

const app = express();
app.use(cors());
configLogger(app);

app.use('/api', apiRouter);

export { app };
