import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { iAuthClient } from "../utils/models";

class AuthClient implements iAuthClient {
  private app: FirebaseApp;
  private auth: Auth;
  private currentUser: User | null = null;

  constructor() {
    const env = import.meta.env;
    const config = {
      apiKey: env.VITE_API_KEY,
      authDomain: env.VITE_AUTH_DOMAIN,
      projectId:env.VITE_PROJECT_ID,
      storageBucket: env.VITE_STORAGE_BUCKET,
      messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
      appId: env.VITE_APP_ID,
    };

    Object.entries(config).forEach(([key, value]) => {
      if (!value) {
        throw new Error(`Missing config value for key: ${key}`);
      }
    });
    
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
  }

  async register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.log("Registration Error", error);
      throw new Error("Failed to register. Please try again.");
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.log("Login error: ", error);
      throw new Error(
        "Failed to login. Please check your credentials and try again."
      );
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log("Logout Error: ", error);
      throw new Error("Failed to logout. Please try again.");
    }
  }

  async getUser() {
    if (this.currentUser) {
      return this.currentUser;
    }

    return new Promise<User | null>((resolve, reject) => {
      const unsubscribe = this.auth.onAuthStateChanged((user) => {
        this.currentUser = user;
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }
}

export default AuthClient;
