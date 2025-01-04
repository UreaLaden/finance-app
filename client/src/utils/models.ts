import { User } from "firebase/auth";
import React from "react";

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

export interface iErrorBoundary {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface iFallbackComponent {
  onReset: () => void;
}

export type iPageConfig = {
  name: string;
  path: string;
  element?: React.ReactNode;  
  iconName: string;
  isActive:boolean;  
};

export interface iSvgIconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface iProtectedRoute{
  component:React.FC;  
}