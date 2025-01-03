import { User } from "firebase/auth";

export interface iAuthClient {
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<User | null>;
}

export interface iAuthContext {  
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<User | null>;
}
export interface iAuthProvider {
  children: React.ReactNode;
}
