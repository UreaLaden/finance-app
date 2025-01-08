import { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "@/utils/routers/config";
import { iHeaderProps, iRouteConfig } from "@/utils/models";
import { HeaderContainer } from "./Header.component";
import { CustomButton } from "@/components/CustomButton/CustomButton";

export const Header: FC<iHeaderProps> = ({ showAdd, onClick }) => {
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

  const onAddButtonSelected = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <HeaderContainer>
      {title}
      {showAdd && (
        <CustomButton
          onClick={onAddButtonSelected}
          label={`+ Add New ${title?.substring(0, title.length - 1)}`}
          type={"primary"}
        />
      )}
    </HeaderContainer>
  );
};
