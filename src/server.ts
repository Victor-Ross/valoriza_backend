import 'reflect-metadata';
import express from 'express';

import { config } from 'dotenv';
config();

import "./database";

const app = express();


app.listen(3000, () => console.log('Rodando lalala'));