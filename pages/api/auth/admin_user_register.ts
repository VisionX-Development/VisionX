import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../db/connectDB";
import UserModel from "../../../db/lib/models/user.model";
import validator from "validator";
import { hashPassword, getDatabaseUri } from "../../../utils/auth/auth";
import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./[...nextauth]";

// CAVE: Diese admin_user_register Funktion ist nur für den Admin gedacht, der neue User anlegen kann. Er kann unabhängig von der Umgebung (Development oder Produktion) beliebig entscheiden in welche App und welche Datenbank ein neuer User gespeichert werden soll. Für die ggf. eigenständige Registrierung von Usern ist eine neue register_user Funktion nötig die die Umgebung abfragt und, je nach App die entsprechende Datenbank findet.

export default async function admin_user_register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== "POST") {
    return;
  }
  try {
    if (!session) {
      throw new Error("Kein Benutzer angemeldet! Bitte melden Sie sich an.");
    }

    const data = req.body;
    const { name, email, password, role, app, database } = data;

    const validatePassword = validator.isStrongPassword(password, {
      minLength: 5,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

    const validateEmail = validator.isEmail(email);

    if (!validatePassword || !validateEmail) {
      throw new Error("Ungültige Email oder Passwort!");
    }

    const uri = await getDatabaseUri(app, database);

    await connectDB(uri);
    const existingUser = await UserModel.find({ email: email });

    if (existingUser.length !== 0) {
      mongoose.connection.close();
      throw new Error("Benutzer existiert bereits!");
    }

    const hashedPassword = await hashPassword(password);

    await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });

    res
      .status(201)
      .json({ message: "Benutzer erfolgreich angelegt.", type: "success" });
    mongoose.connection.close();
  } catch (error: any) {
    res.status(422).json({ message: error.message, type: "warning" });
  }
}
