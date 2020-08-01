import { Company, CompanyInterface } from './company.schema';

class CompanyModel {
  /**
   * @description Get Company list
   */
  async getMany(): Promise<CompanyInterface[]> {
    try {
      return await Company.find({});
    } catch (error) {
      throw error;
    }
  }
}

export default new CompanyModel();
