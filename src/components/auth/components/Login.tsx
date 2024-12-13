import { useState } from "react";
import React from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { AuthResponse, createClient } from "@supabase/supabase-js";
import supabase from "../../../utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any | null>(null);
  const { user, setUser, setSession } = useAuth();

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault
    await supabase.auth.signInWithPassword({ email, password })
      .then((response: AuthResponse) => {
        if (response.data != null) {
          console.log(response.data.user);
          setUser(response.data.user)
          setSession(response.data.session)
          setError(null)
          console.log(user);
        } else if (response.error) {
          setError(response.error)
        } else {
          console.log("Something went wrong");
        }
      })
      .catch(error => {
        console.log("Error", error);
      })
  }

  const printLog = () => {
    console.log(import.meta.env['VITE_SUPABASE_URL']);
    console.log(import.meta.env['VITE_SUPABASE_ANON_KEY']);
  }

  return (
    <div className="mx-auto flex flex-col min-w-2.5 gap-3 p-3">
      <input
        className="shadow border rounded-md py-1 px-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        className="shadow border rounded-md py-1 px-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      <button
        onClick={(e) => signIn(e)}
        className="shadow border rounded-md py-1 px-2 bg-slate-400 hover:bg-slate-700 hover:text-white"
      >
        Sign In
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
