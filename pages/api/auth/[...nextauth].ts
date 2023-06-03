import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../utils/auth/auth";
import { connectDB } from "../../../db/connectDB";
import UserModel from "../../../db/lib/models/user.model";
import mongoose from "mongoose";

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  callbacks: {
    async jwt(token: any, user: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session(session: any, token: any) {
      session.user.role = token.role;
      return session;
    },
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: any) {
        try {
          let uri: string;
          if (process.env.NODE_ENV === "development") {
            uri = process.env.VISIONX_URI_DEV || "";
          } else {
            uri = process.env.VISIONX_URI_PRODUCTION || "";
          }
          await connectDB(uri);

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
          return {
            name: user[0].name,
            email: user[0].email,
            role: user[0].role,
          };
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
});
