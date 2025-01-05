import { useAuth } from "@/utils/hooks/useAuth";

export function Signup(){
    const { logout } = useAuth();
      const handleSignout = async () => {
        try {
          await logout();
        } catch (error) {
          console.error("Error signing out", error);
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
          <h1>Sign Up</h1>
          <button onClick={handleSignout}>Logout</button>
        </div>
      );
}
