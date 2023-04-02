import { Model, Schema } from "mongoose";
import createModel from "../creatModels";
import { ObjectId } from "mongodb";

interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
}

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser, UserModel>({
  _id: { type: ObjectId, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

export default createModel<IUser, UserModel>("users", userSchema);
