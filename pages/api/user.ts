import { connectDB } from "../../db/connectDB";
import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../db/lib/models/user.model";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();

    const allUsers = await UserModel.find({});

    res.status(200).json({ users: allUsers });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}
