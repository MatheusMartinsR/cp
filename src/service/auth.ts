import { apiLogin } from "./apiLogin";

export const AuthService = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const res = await apiLogin.post<string>("/login", {
      email: email,
      password: password,
    });

    return res.data;
  },
};
