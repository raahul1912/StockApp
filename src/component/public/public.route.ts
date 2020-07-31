import { Request, Response, Router } from 'express';
import PublicController from './public.controller';
import PublicValidations from './public.validations';
const router = Router();

/**
 * Login admin
 * @route POST /admin/public/api/v1/login
 * @group Public - API related to Public routes
 * @param {LoginUser.model} body.body - Body
 * @returns {object} 200 - Ok
 * @returns {object} 422 - Un processable Entity
 * @returns {object} 500 - Internal server error
 *
 */
/**
 * @typedef LoginUser
 * @property {string} email.required
 * @property {string} password.required
 */
router.post('/login', PublicValidations.login, (req: Request, res: Response) => {
  PublicController.login(req, res);
});

export default router;
