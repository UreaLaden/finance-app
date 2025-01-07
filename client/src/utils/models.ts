import { User } from "firebase/auth";
import React from "react";
import { InputFieldTypes } from "./helpers/constants";
import { RouteObject } from "react-router-dom";

export interface iAuthClient {
  register: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<User | null>;
}

export interface iAuthContext {
  signup: (email: string, password: string, name: string) => Promise<void>;
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

export type iRouteConfig = {
  iconName?: string; // Optional name of the icon
  isActive?: boolean; // Optional flag to indicate active status
  name?: string; // Optional name of the route
  children?: iRouteConfig[]; // Optional children of the route
  path?: string; // Path of the route
};

export type iPageConfig = iRouteConfig & RouteObject;

export interface iSvgIconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface iProtectedRoute {
  component: React.FC;
}

export type Color = `#${string}` | `var(--${string})`;

export interface InputFieldProps {
  mode: InputFieldTypes;
  label: string;
  placeholder: string;
  theme?: Color;
  helperText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  error?: boolean;
  required?: boolean;
  adornmentPosition?: "start" | "end";
  dropdownContent?: iDropdownContent[];
}

export interface iDropdownContent {
  contentMode: "color" | "text";
  theme?: Color;
  primaryText: string;
  secondaryText?: string;
  disable?: boolean;
}

export interface iButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  primaryColor?: Color;
  secondaryColor?: Color;
  disabled?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "destroy";
  className?: string;
  fullWidth?: boolean;
}

export interface iLoginFormProps {
  onSubmit: (name?: string, email?: string, password?: string) => void;
}

export interface iBalanceCard {
  title: string;
  amount: number;
  highlight?: boolean;
}

export interface iSummarySection {
  data: iBalanceCard[];
}

export interface iHeaderProps {
  showAdd?: boolean;
  onClick?: () => void;
}

export interface iPot {
  //FIXME: Replace this interface with Protobuf generated interface
  // This is a placeholder interface
  title:string;
  currentAmount:number;
  targetAmount:number;
  theme:Color;
}