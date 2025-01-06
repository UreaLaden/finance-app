import { useCallback, useMemo, useState } from "react";
import {
  ToggleButton,
  ToolbarContainer,
  ToolbarSelector,
} from "./Toolbar.component";
import { AppRoutes } from "@/utils/routers/config";
import { Typography, useMediaQuery } from "@mui/material";
import SvgIcon from "@/utils/helpers/svgIcon";
import { useLocation, useNavigate } from "react-router-dom";

export const Toolbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1041px)");
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

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
          $collapsed={collapsed}
          onClick={() => handleNavigation(path.path)}
        >
          <SvgIcon
            name={path.iconName!}
            className={"toolbar-icon"}
            width={17}
            height={17}
            fill={isSelected ? "var(--green-primary)" : "blue"}
          />
          {!isMobile && !collapsed && (
            <Typography
              className={"toolbar-selector-text"}
              sx={{ fontSize: "var(--font-size-small)", fontWeight: "700" }}
            >
              {path.name}
            </Typography>
          )}
        </ToolbarSelector>
      );
    });
  }, [collapsed, handleNavigation, isMobile, location.pathname]);
  return (
    <ToolbarContainer $collapsed={collapsed}>
      {Content}
      {isDesktop && (
        <ToggleButton onClick={handleToggleCollapse} $collapsed={collapsed}>
          <SvgIcon
            className={collapsed ? "expand-icon" : "collapse-icon"}
            name={"minimizeMenu"}
            width={20}
            height={20}
            fill={"var(--grey-300)"}
          />
          <Typography
            className={"toolbar-selector-text"}
            sx={{ fontSize: "var(--font-size-small)", fontWeight: "700" }}
          >
            Minimize Menu
          </Typography>
        </ToggleButton>
      )}
    </ToolbarContainer>
  );
};
