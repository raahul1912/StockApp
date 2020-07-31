import { Application } from 'express';
import PublicRoute from '../component/public';
/**
 * Init All routes here
 */
export default (app: Application) => {
  // Public Routes
  app.use('/public/api', PublicRoute);
};
