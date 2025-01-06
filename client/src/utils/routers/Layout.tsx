import { MainContent } from "@/components/MainContent/MainContent";
import { Toolbar } from "@/components/Toolbar/Toolbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Toolbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};
