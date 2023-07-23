import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export async function getDatabaseUri(
  app: string,
  database: string
): Promise<string> {
  if (app === "visionx") {
    if (database === "production") {
      return process.env.VISIONX_URI_PRODUCTION || "";
    } else if (database === "development") {
      return process.env.VISIONX_URI_DEV || "";
    }
  } else if (app === "star") {
    if (database === "production") {
      return process.env.STAR_URI_PRODUCTION || "";
    } else if (database === "development") {
      return process.env.STAR_URI_DEV || "";
    }
  }
  return "";
}
