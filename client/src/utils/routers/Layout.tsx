import {
  MainContent,
  MainInnerContent,
} from "@/components/MainContent/MainContent";
import { Toolbar } from "@/components/Toolbar/Toolbar";
import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = useCallback((isCollapsed: boolean) => {
    setIsSidebarOpen(!isCollapsed);
  }, []);

  return (
    <div>
      <Toolbar onCollapse={onSidebarToggle} />
      <MainContent className={"main-content"} $isSidebarOpen={isSidebarOpen}>
        <MainInnerContent>
          <Outlet />
        </MainInnerContent>
      </MainContent>
    </div>
  );
};
