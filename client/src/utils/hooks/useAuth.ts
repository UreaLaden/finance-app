import { useContext } from "react";
import { iAuthContext } from "../models";
import { AuthContext } from "../../contexts/authContext";

export const useAuth = () => {
    const context = useContext<iAuthContext>(AuthContext);

    if(!context){
        throw new Error("useGetAuthContext must be used within an AuthProvider");
    }

    return context;
}