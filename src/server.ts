import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';

import { config } from 'dotenv';
config();

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }

  return response.status(500).json({ status: 'Error', message: 'Internal server error' });
});


app.listen(3000, () => console.log('Working on server PORT 3000'));