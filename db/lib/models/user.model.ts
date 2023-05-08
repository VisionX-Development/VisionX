import { Model, Schema } from "mongoose";
import createModel from "../creatModels";
import { ObjectId } from "mongodb";

interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  role: string;
}

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser, UserModel>({
  _id: { type: ObjectId, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
});

export default createModel<IUser, UserModel>("users", userSchema);
