import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../db/connectDB";
import UserModel from "../../../db/lib/models/user.model";
import validator from "validator";
import { hashPassword, getDatabaseUri } from "../../../utils/auth/auth";
import mongoose from "mongoose";

// CAVE: Diese register_admin Funktion ist nur für den Admin gedacht, der neue User anlegen kann. Er kann unabhängig von der Umgebung (Development oder Produktion) beliebig entscheiden in welche App und welche Datenbank ein neuer User gespeichert werden soll. Für die ggf. eigenständige Registrierung von Usern ist eine neue register_user Funktion nötig die die Umgebung abfragt und, je nach App die entsprechende Datenbank findet.

export default async function register_admin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }
  try {
    const data = req.body;
    const { name, email, password, app, database } = data;
    const validatePassword = validator.isStrongPassword(password, {
      minLength: 5,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

    const validateEmail = validator.isEmail(email);

    if (!validatePassword || !validateEmail) {
      res.status(422).json({ message: "Ungültige Email oder Passwort!" });
      return;
    }

    const uri = await getDatabaseUri(app, database);
    await connectDB(uri);

    const existingUser = await UserModel.find({ email: email });

    console.log(existingUser);

    if (existingUser.length !== 0) {
      res
        .status(422)
        .json({ message: "Benutzer existiert bereits.", type: "warning" });
      mongoose.connection.close();
      throw new Error("Benutzer existiert bereits!");
    }

    const hashedPassword = await hashPassword(password);

    await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: "user",
    });

    res
      .status(201)
      .json({ message: "Benutzer erfolgreich angelegt.", type: "success" });
    mongoose.connection.close();
  } catch (error: any) {
    res.status(400).json(error);
    throw new Error(error.message);
  }
}
