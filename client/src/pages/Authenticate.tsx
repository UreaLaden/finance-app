import { LoginForm } from "@/components";
import { useAuth } from "@/utils/hooks/useAuth";
import { paths } from "@/utils/routers/config";
import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Authenticate() {
  const { login, getUser, signup } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getUser();
        if (user) {
          const redirectPath = location.state?.from?.pathname || paths.Overview;
          navigate(redirectPath);
        }
      } catch (error) {
        console.error("Error checking authentication", error);
      }
    };

    checkAuth();
  }, [getUser, location, navigate]);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        if (email && password) {
          await login(email, password);
          const user = await getUser();
          // Redirect after login
          if (user) {
            const redirectPath =
              location.state?.from?.pathname || paths.Overview;
            navigate(redirectPath);
          }
        }
      } catch (error) {
        console.error("Error logging in", error);
      }
    },
    [getUser, location.state?.from?.pathname, login, navigate]
  );

  const handleSignup = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        if (!name || !email || !password) {
          throw new Error("Please fill in all fields");
        }
        await signup(email, password, name);
        const user = await getUser();
        // Redirect after signup
        if (user) {
          const redirectPath = location.state?.from?.pathname || paths.Overview;
          navigate(redirectPath);
        }
      } catch (error) {
        console.error("Error signing up", error);
      }
    },
    [getUser, location.state?.from?.pathname, signup, navigate]
  );

  const handleSubmit = useCallback(
    (name?: string, email?: string, password?: string) => {
      if (location.pathname === paths.Login) {
        if (!email || !password) {
          throw new Error("Please fill in all fields");
        }
        handleLogin(email, password);
        return;
      }
      if (!name || !email || !password) {
        throw new Error("Please fill in all fields");
      }
      handleSignup(name, email, password);
    },
    [handleLogin, handleSignup, location.pathname]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        placeContent: "center",
        margin: "1em",
        padding: "1em 0 2em 0",
        borderRadius: "8px",
      }}
    >
      <LoginForm onSubmit={handleSubmit} />
    </Box>
  );
}
