import { connection, connect } from "mongoose";

const uri: string = process.env.MONGODB_URI || "";

export const connectDB = async () => {
  try {
    const connectedDB = await connect(uri);

    return connectedDB;
  } catch (error: any) {
    console.error({ QuerryError: error.message });
    throw new Error(error.message);
  }
};
