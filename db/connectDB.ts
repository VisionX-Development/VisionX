import { connection, connect } from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const connectedDB = await connect(uri);
    return connectedDB;
  } catch (error: any) {
    console.error({ QuerryError: error.message });
    throw new Error(error.message);
  }
};
