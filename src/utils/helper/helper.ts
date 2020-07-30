import { Response } from 'express';
import STATUS_CODES from 'http-status-codes';
const BCRYPT_SALT: any = process.env.BCRYPT_SALT;

/**
 * @description Create Response
 * @param {Object} res
 * @param {Number} status
 * @param {String} message
 * @param {Object} payload
 * @param {Object} pager
 */
export const response = (
  res: Response,
  status: number,
  message: string,
  payload: object | null = {},
  pager: object | null = {}
) => {
  const resPager = typeof pager !== 'undefined' ? pager : {};

  return res.status(status).json({
    status,
    message,
    payload,
    pager: resPager
  });
};

/**
 * @description Send Validation Response
 * @param {Object} res
 * @param {errors} errors - Errors Object
 */
export const validationResponse = (res: Response, errors: any) => {
  return response(
    res,
    STATUS_CODES.UNPROCESSABLE_ENTITY,
    errors[Object.keys(errors)[0]],
    { error: errors[Object.keys(errors)[0]] },
    {}
  );
};
