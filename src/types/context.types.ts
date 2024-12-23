import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  session: any;
  setSession: (session: any) => void;
}