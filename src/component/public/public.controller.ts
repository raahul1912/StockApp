import { Request, Response } from 'express';
import STATUS_CODES from 'http-status-codes';
import { response } from '../../utils/helper';
class PublicController {
  /**
   * @description Login
   * @param req
   * @param res
   */
  public async login(req: Request, res: Response) {
    try {
      let { email, password } = req.body;

      response(res, STATUS_CODES.OK, 'Login Successful', {});
    } catch (e) {
      console.error(`Error while login ${e}`); // Log
      response(res, STATUS_CODES.INTERNAL_SERVER_ERROR, 'Server Error');
    }
  }
}

export default new PublicController();
