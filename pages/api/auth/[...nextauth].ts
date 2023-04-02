import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../utils/auth/auth";
import { connectDB } from "../../../db/connectDB";
import UserModel from "../../../db/lib/models/user.model";
import mongoose from "mongoose";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: any) {
        try {
          await connectDB();

          const user = await UserModel.find({ email: credentials.email });

          if (user.length === 0) {
            mongoose.connection.close();
            throw new Error("Benutzer wurde nicht gefunden!");
          }

          const isValid = await verifyPassword(
            credentials.password,
            user[0].password
          );

          if (!isValid) {
            mongoose.connection.close();
            throw new Error("Das Passwort ist falsch!");
          }
          mongoose.connection.close();
          return { email: user[0].email };
        } catch (error: any) {
          console.error({ QuerryError: error.message });
          throw new Error(error.message);
        }
      },
    }),
  ],
});
