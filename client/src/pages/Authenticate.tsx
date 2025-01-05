import { LoginForm } from "@/components";
import { useAuth } from "@/utils/hooks/useAuth";
import { paths } from "@/utils/routers/config";
import { Box } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Authenticate() {
  const { login, getUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

  const handleLogin = useCallback(async () => {
    try {
      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current.value, passwordRef.current.value);
        const user = await getUser();
        // Redirect after login
        if (user) {
          const redirectPath = location.state?.from?.pathname || paths.Overview;
          navigate(redirectPath);
        }
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  }, [getUser, location.state?.from?.pathname, login, navigate]);

  const handleSignup = async () => {};

  const handleSubmit = useCallback(() => {
    if (location.pathname === paths.Login) {
      handleLogin();
      return;
    }
    handleSignup();
  }, [handleLogin, location.pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--white)",
        display: "flex",
        placeContent: "center",
        margin: "1em",
        padding:"1em 0 2em 0",
        borderRadius: "8px",
      }}
    >
      <div style={{ width: "85%" }}>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </Box>
  );
}
