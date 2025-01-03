import { createContext } from "react";
import { iAuthContext } from "../utils/models";

export const AuthContext = createContext<iAuthContext>({  
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  getUser: async () => null,
});
