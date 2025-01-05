import { useAuth } from "@/utils/hooks/useAuth";
import { paths } from "@/utils/routers/config";
import { useNavigate } from "react-router-dom";

export function RecurringBills(){
    const { logout,getUser } = useAuth();
    const navigate = useNavigate();
    const handleSignout = async () => {
        try {
          await logout();
          const user = await getUser();
          console.log(user);
          if (!user) {
            navigate(paths.Login);
          }
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
          <h1>Recurring Bills</h1>
          <button onClick={handleSignout}>Logout</button>
        </div>
      );
}