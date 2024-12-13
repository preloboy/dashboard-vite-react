import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, ReactNode, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  session: any;
  setSession: (session: any) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

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
