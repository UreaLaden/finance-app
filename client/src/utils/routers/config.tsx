import { iPageConfig } from "../models";
import {
  Budgets,
  Overview,
  Transactions,
  Pots,
  RecurringBills,
  Authenticate,
} from "@/pages";


import { ProtectedRoute } from "./protectedRoute";

export const paths = {
  Overview: "/",
  Transactions: "/transactions",
  Budgets: "/budgets",
  Pots: "/pots",
  RecurringBills: "/recurring-bills",
  Login: "/login",
  Signup: "/signup",
};

export const AppRoutes: iPageConfig[] = [
  {
    name: "Overview",
    path: paths.Overview,
    element: <ProtectedRoute component={Overview} />,
    iconName: "navOverview",
    isActive: true,
  },
  {
    name: "Transactions",
    path: paths.Transactions,
    element: <ProtectedRoute component={Transactions} />,
    iconName: "navTransactions",
    isActive: true,
  },
  {
    name: "Budgets",
    path: paths.Budgets,
    element: <ProtectedRoute component={Budgets} />,
    iconName: "navBudget",
    isActive: true,
  },
  {
    name: "Pots",
    path: paths.Pots,
    element: <ProtectedRoute component={Pots} />,
    iconName: "navPots",
    isActive: true,
  },
  {
    name: "Recurring Bills",
    path: paths.RecurringBills,
    element: <ProtectedRoute component={RecurringBills} />,
    iconName: "navRecurringBills",
    isActive: true,
  },
  {
    name: "Login",
    path: paths.Login,
    iconName: "illustrationAuthentication",
    element: <Authenticate />,
    isActive: false,
  },
  {
    name: "Signup",
    path: paths.Signup,
    iconName: "illustrationAuthentication",
    element: <Authenticate />,
    isActive: false,
  },
];
