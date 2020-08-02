import bodyParser from 'body-parser';
import compression from 'compression';
import { Application } from 'express';
import cors from 'cors';

export default (app: Application) => {
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
