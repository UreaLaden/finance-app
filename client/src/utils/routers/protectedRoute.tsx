import { FC, useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { iProtectedRoute } from "../models";

export const ProtectedRoute: FC<iProtectedRoute> = ({
    component: Component,
  }) => {
    const { getUser } = useAuth();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
    useEffect(() => {
      const checkAuth = async () => {
        try {
          const user = await getUser();          
          setIsAuthenticated(user !== null);
        } catch (error) {
          console.error("Error checking authentication", error);
          setIsAuthenticated(false);
        }
      };
  
      checkAuth();
    }, [getUser]);
  
    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return <Component />;
  };
  