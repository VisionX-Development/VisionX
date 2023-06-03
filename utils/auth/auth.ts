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

export async function createAdminUser(
  name: string,
  email: string,
  password: string,
  role: string,
  app: string,
  database: string
) {
  const response = await fetch("/api/auth/admin_user_register", {
    method: "POST",
    body: JSON.stringify({ name, email, password, role, app, database }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}
