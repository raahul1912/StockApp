import { NextFunction, Request, Response } from 'express';
import { validationResponse } from '../../utils/helper';
import { isEmail, isEmpty, isLength } from '../../utils/validator';

class PublicValidations {
  /**
   * @description Login User
   * @param req
   * @param res
   * @param next
   */
  login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const errors: any = {};

    if (isEmpty(email)) {
      errors.email = 'Email is required';
    } else if (!isEmail(email)) {
      errors.email = 'Email should be valid';
    }

    if (isEmpty(password)) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      validationResponse(res, errors);
    } else {
      next();
    }
  }
}

export default new PublicValidations();
