import { FC, useMemo } from "react";
import AuthClient from "../clients/authClient";
import { AuthContext } from "../contexts/authContext";
import { iAuthProvider } from "../utils/models";

export const AuthProvider: FC<iAuthProvider> = ({ children }) => {
  const client = useMemo(() => new AuthClient(), []);

  const context = {
    signup: (email: string, password: string, name: string) =>
      client.register(email, password, name),
    login: (email: string, password: string) => client.login(email, password),
    logout: () => client.logout(),
    getUser: () => client.getUser(),
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
