import ErrorBoundary from "../classes/ErrorBoundary";
import { AppRoutes } from "./config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const browserRouter = createBrowserRouter(AppRoutes);

export function Router() {
  return (
    <ErrorBoundary>
      <RouterProvider router={browserRouter} />
    </ErrorBoundary>
  );
}
