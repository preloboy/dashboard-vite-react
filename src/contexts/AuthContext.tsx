import { createContext } from "react";
import { AuthContextType } from "../types/context.types";
import { Session, User } from "@supabase/supabase-js";
import { useContext, useState } from "react";
import { AuthProviderProps } from "../types/context.types";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const role = user?.role as string

    return (
        <AuthContext.Provider value={{ user, role, setUser, session, setSession, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
