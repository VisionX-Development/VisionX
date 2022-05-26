import { MongoClient } from "mongodb";

export async function connectToDatabase(): Promise<MongoClient> {
  const client = MongoClient.connect(
    "mongodb+srv://visionx_user:GfdNb$XJ8R4t6!G@appdata.txphp.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}
