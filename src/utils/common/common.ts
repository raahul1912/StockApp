import { NextFunction, Request, Response } from 'express';
import STATUS_CODES from 'http-status-codes';
import { decode, sign, verify } from 'jsonwebtoken';
import { response } from '../../utils/helper';
import { TOKEN_SECRET_KEY } from '../constants';

interface DataStoredInToken {
  userId: String;
  email: string;
  name: string;
}

class Common {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  public authenticateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (authorization) {
        verify(authorization, TOKEN_SECRET_KEY, async (err, decoded) => {
          if (err) {
            response(res, STATUS_CODES.UNAUTHORIZED, `Unauthorized access`, {});
            return;
          }

          next();
        });
      } else {
        response(res, STATUS_CODES.FORBIDDEN, `Token required`, {});
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param data
   */
  public createToken(data: DataStoredInToken) {
    try {
      const expiresIn = 60 * 60; // an hour
      const token = sign(data, TOKEN_SECRET_KEY, { expiresIn });
      return token;
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param token
   */
  public decodeToken(token: string) {
    const data = decode(token, { complete: true });
    return data;
  }
}

export default new Common();
