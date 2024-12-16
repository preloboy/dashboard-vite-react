import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, ReactNode, useState } from "react";
import { AuthContextType, AuthProviderProps } from "../Models/AuthInterface";
import { AuthContext } from "../contexts/AuthContext";


export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser, session, setSession }}>
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
