import { createContext } from "react";
import { AuthContextType } from "../Models/AuthInterface";

export const AuthContext = createContext<AuthContextType | null>(null);
