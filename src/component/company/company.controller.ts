import { Request, Response } from 'express';
import STATUS_CODES from 'http-status-codes';
import { response } from '../../utils/helper';
import CompanyModel from './company.model';

class CompanyController {
  /**
   * @description Board list
   * @param req
   * @param res
   */
  async companyList(req: Request, res: Response) {
    try {
      const list = await CompanyModel.getMany();

      response(res, STATUS_CODES.OK, 'Company List', list);
    } catch (error) {
      console.error(`Error while listing companies ${error}`);
      response(res, STATUS_CODES.INTERNAL_SERVER_ERROR, 'Server Error');
    }
  }
}

export default new CompanyController();
