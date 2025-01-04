import { useAuth } from "@/utils/hooks/useAuth";
import { paths } from "@/utils/routers/config";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Authenticate() {
  const { logout, login, getUser } = useAuth();
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

  const handleSignout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleLogin = async () => {
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
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1>Authenticate</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          rowGap: "10px",
        }}
      >
        <input ref={emailRef} type="text" placeholder={"Email"} />
        <input ref={passwordRef} type="password" placeholder={"Password"} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignout}>Logout</button>
      </div>
    </div>
  );
}
