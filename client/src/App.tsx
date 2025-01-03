import { useRef } from "react";
import "./App.css";
import { useAuth } from "./utils/hooks/useAuth";

function App() {
  console.log(import.meta.env);
  const { signup, login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignup = async () => {
    if (!emailRef.current || !passwordRef.current) {
      console.warn("Email or password ref is null");
      return;
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.error("Signup Error: ", error);
    }
  };

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      console.warn("Email or password ref is null");
      return;
    }

    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };

  return (
    <div>
      <input ref={emailRef} type="text" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default App;
