import { Model, Schema } from "mongoose";
import createModel from "../creatModels";

interface IUser {
  email: string;
  password: string;
  name: string;
  role: string;
}

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser, UserModel>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
});

export default createModel<IUser, UserModel>("users", userSchema);
