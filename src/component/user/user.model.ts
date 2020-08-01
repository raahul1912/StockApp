import { User as UserType } from '../public/types';
import { User } from './user.schema';

class UserModel {
  /**
   * @description FInd User
   */
  async findUser(condition: object) {
    try {
      return await User.findOne(condition);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Add User
   */
  async addUser(userObj: UserType) {
    try {
      return await User.create(userObj);
    } catch (error) {
      throw error;
    }
  }
}

export default new UserModel();
