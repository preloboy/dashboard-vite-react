import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  user: any;
  role : string;
  setUser: (user: any) => void;
  session: any;
  setSession: (session: any) => void;
  loading : boolean;
  setLoading : (loading:boolean) => void;
}