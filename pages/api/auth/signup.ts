import { connectToDatabase } from "../../../utils/db/db";
import validator from "validator";
import { hashPassword } from "../../../utils/auth/auth";

async function signupHandler(req: any, res: any) {
  const data = req.body;

  const { email, password } = data;

  if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
    res.status(422).json({ message: "Invalid email or password" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created!" });
}

export default signupHandler;
