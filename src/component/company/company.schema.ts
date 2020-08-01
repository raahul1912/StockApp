import { Document, model, Model, Schema } from 'mongoose';

const CompanySchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    total_shares: {
      type: String,
      required: true
    },
    shareValue: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: 'companies' }
);

export interface CompanyInterface extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  total_shares: string;
  shareValue: string;
}

export const Company: Model<CompanyInterface> = model<CompanyInterface>('companies', CompanySchema);
