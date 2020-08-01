import { compare, hash } from 'bcrypt';
import { Request, Response } from 'express';
import STATUS_CODES from 'http-status-codes';
import { Common } from '../../utils/common';
import { response } from '../../utils/helper';
import UserModel from '../user/user.model';
import { User } from './types';
class PublicController {
  /**
   * @description Login
   * @param req
   * @param res
   */
  public async login(req: Request, res: Response) {
    try {
      let { email, password } = req.body;
      const isUserExist = await UserModel.findUser({ email });

      if (!isUserExist) {
        response(res, STATUS_CODES.UNPROCESSABLE_ENTITY, 'User not found. Register first');
        return;
      }
      const isPwdMatching = await compare(password, isUserExist.password);

      if (!isPwdMatching) {
        response(res, STATUS_CODES.UNAUTHORIZED, 'Password is wrong', {});
        return;
      }
      const claims = { userId: isUserExist._id, name: isUserExist.name, email };
      const token = Common.createToken(claims);
      response(res, STATUS_CODES.OK, 'Login Successful', { token });
    } catch (e) {
      console.error(`Error while login ${e}`); // Log
      response(res, STATUS_CODES.INTERNAL_SERVER_ERROR, 'Server Error');
    }
  }

  /**
   * @description Login
   * @param req
   * @param res
   */
  public async register(req: Request, res: Response) {
    try {
      let { name, email, password } = req.body;

      const isUserExist = await UserModel.findUser({ email });

      if (isUserExist) {
        response(res, STATUS_CODES.UNPROCESSABLE_ENTITY, 'user already registered with this email');
        return;
      }

      password = await hash(password, 10);

      const userObj: User = {
        name,
        email,
        password
      };

      const user = await UserModel.addUser(userObj);

      const claims = { userId: user._id, name, email };
      const token = Common.createToken(claims);
      response(res, STATUS_CODES.OK, 'Register Successful', { token });
    } catch (e) {
      console.error(`Error while login ${e}`); // Log
      response(res, STATUS_CODES.INTERNAL_SERVER_ERROR, 'Server Error');
    }
  }
}

export default new PublicController();
