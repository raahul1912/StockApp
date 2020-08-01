import { Router, Request, Response } from 'express';
import CompanyController from './company.controller';
const router = Router();
/**
 * List Companies
 * @route GET /company/api/v1/list
 * @group Public - API related to company routes
 * @param {Company.model} body.body - Body
 * @returns {object} 200 - Ok
 * @returns {object} 422 - Un processable Entity
 * @returns {object} 500 - Internal server error
 *
 */
/**
 * @typedef Company
 */
router.get('/list', (req: Request, res: Response) => {
  CompanyController.companyList(req, res);
});
export default router;
