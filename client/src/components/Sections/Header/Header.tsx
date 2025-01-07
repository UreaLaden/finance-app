import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "@/utils/routers/config";
import { iRouteConfig } from "@/utils/models";
import { HeaderContainer } from "./Header.component";

export const Header = () => {
  const location = useLocation();

  const title = useMemo(() => {
    const route = AppRoutes[0]?.children?.find(
      (route: iRouteConfig) => route.path === location.pathname
    );
    if (route) {
      return route.name;
    }
    return "Not Found";
  }, [location.pathname]);

  return <HeaderContainer>{title}</HeaderContainer>;
};
