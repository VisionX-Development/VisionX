import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../db/connectDB";
import UserModel from "../../../db/lib/models/user.model";
import validator from "validator";
import { hashPassword, getDatabaseUri } from "../../../utils/api/auth";
import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { env } from "process";

export default async function user_put(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== "PATCH") {
    return;
  }
  try {
    if (!session) {
      throw new Error("Kein Benutzer angemeldet! Bitte melden Sie sich an.");
    }
    const old_email = session.user.email;
    const data = req.body;

    const { new_name, new_email, old_password, new_password } = data;

    const validatePassword = validator.isStrongPassword(new_password, {
      minLength: 5,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

    const validateEmail = validator.isEmail(new_email);

    if (!validatePassword || !validateEmail) {
      throw new Error("Ungültige Email oder Passwort!");
    }
    const app = "visionx";

    let database;

    env.NODE_ENV === "production"
      ? (database = "production")
      : (database = "development");

    const uri = await getDatabaseUri(app, database);

    await connectDB(uri);

    const existingUser = await UserModel.find({ email: new_email });

    if (existingUser.length !== 0) {
      mongoose.connection.close();
      throw new Error("E-Mail existiert bereits!");
    }

    const hashedPassword = await hashPassword(new_password);

    await UserModel.updateOne(
      { email: old_email },
      { name: new_name, email: new_email, password: hashedPassword }
    );

    res.status(201).json({
      message: "Benutzer- Daten erfolgreich geändert.",
      type: "success",
    });
    mongoose.connection.close();
  } catch (error: any) {
    res.status(422).json({ message: error.message, type: "warning" });
  }
}
