import ErrorBoundary from "../classes/ErrorBoundary";
import { AppRoutes } from "./config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const configRoutes = AppRoutes.map(({ path, element }) => ({
  path,
  element,
}));

const browserRouter = createBrowserRouter(configRoutes);

export function Router() {
  return (
    <ErrorBoundary>
      <RouterProvider router={browserRouter} />
    </ErrorBoundary>
  );
}
