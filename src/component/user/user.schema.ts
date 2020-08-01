import { Document, model, Model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: 'users' }
);

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
}

export const User: Model<UserInterface> = model<UserInterface>('users', UserSchema);
