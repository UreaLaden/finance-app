import {
  Budgets,
  Overview,
  Transactions,
  Pots,
  RecurringBills,
  Authenticate,
} from "@/pages";

import { ProtectedRoute } from "./protectedRoute";
import { Layout } from "./Layout";
import { iPageConfig } from "../models";
import { Navigate } from "react-router-dom";

export const paths = {
  Home: "/",
  Overview: "/overview",
  Transactions: "/transactions",
  Budgets: "/budgets",
  Pots: "/pots",
  RecurringBills: "/recurring-bills",
  Login: "/login",
  Signup: "/signup",
};

export const AppRoutes: iPageConfig[] = [
  {
    path: paths.Home,
    element: <Layout />,
    children: [
      {
        path: paths.Home,
        element: <Navigate to={paths.Overview} />,
        isActive:false,
      },
      {
        name: "Overview",
        path: paths.Overview,
        element: <ProtectedRoute component={Overview} />,
        iconName: "navOverview",
        isActive: true,
        children: [],
      },
      {
        name: "Transactions",
        path: paths.Transactions,
        element: <ProtectedRoute component={Transactions} />,
        iconName: "navTransactions",
        isActive: true,
        children: [],
      },
      {
        name: "Budgets",
        path: paths.Budgets,
        element: <ProtectedRoute component={Budgets} />,
        iconName: "navBudget",
        isActive: true,
        children: [],
      },
      {
        name: "Pots",
        path: paths.Pots,
        element: <ProtectedRoute component={Pots} />,
        iconName: "navPots",
        isActive: true,
        children: [],
      },
      {
        name: "Recurring Bills",
        path: paths.RecurringBills,
        element: <ProtectedRoute component={RecurringBills} />,
        iconName: "navRecurringBills",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    name: "Login",
    path: paths.Login,
    iconName: "illustrationAuthentication",
    element: <Authenticate />,
    isActive: false,
    children: [],
  },
  {
    name: "Signup",
    path: paths.Signup,
    iconName: "illustrationAuthentication",
    element: <Authenticate />,
    isActive: false,
    children: [],
  },
];
