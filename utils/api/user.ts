export async function createAdminUser(
  name: string,
  email: string,
  password: string,
  role: string,
  app: string,
  database: string
) {
  const response = await fetch("/api/user/admin_user_register", {
    method: "POST",
    body: JSON.stringify({ name, email, password, role, app, database }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

export async function changeUserData(new_name: string, new_email: string) {
  const response = await fetch("/api/user/user_patch", {
    method: "PATCH",
    body: JSON.stringify({ new_name, new_email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}
