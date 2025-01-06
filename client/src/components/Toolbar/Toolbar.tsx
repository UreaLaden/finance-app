import { useCallback, useMemo } from "react";
import { ToolbarContainer, ToolbarSelector } from "./Toolbar.component";
import { AppRoutes } from "@/utils/routers/config";
import { Typography, useMediaQuery } from "@mui/material";
import SvgIcon from "@/utils/helpers/svgIcon";
import { useLocation, useNavigate } from "react-router-dom";

export const Toolbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path, { state: { from: location } });
    },
    [navigate, location]
  );

  const Content = useMemo(() => {
    return AppRoutes[0].children.map((path) => {
      const isSelected = location.pathname === path.path;
      return (
        <ToolbarSelector
          key={path.name}
          $active={location.pathname === path.path}
          className={"toolbar-selector"}
          onClick={() => handleNavigation(path.path)}
        >
          <SvgIcon
            name={path.iconName!}
            className={"toolbar-icon"}
            width={17}
            height={17}
            fill={isSelected ? "var(--green-primary)" : "blue"}
          />
          {!isMobile && (
            <Typography
              sx={{ fontSize: "var(--font-size-small)", fontWeight: "bold" }}
            >
              {path.name}
            </Typography>
          )}
        </ToolbarSelector>
      );
    });
  }, [handleNavigation, isMobile, location.pathname]);
  return <ToolbarContainer>{Content}</ToolbarContainer>;
};
