import { useState } from "react";
import React from "react";
import { AuthResponse, createClient } from "@supabase/supabase-js";
import supabase from "../../utils/supabase";
import { useAuth } from "../../contexts/AuthContext";
import { Loading } from "../../components/elements/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any | null>(null);
  const { setUser, setSession } = useAuth();
  const { setLoading } = useAuth()

  const signIn = async (e: React.FormEvent) => {

    setLoading(true)
    e.preventDefault
    await supabase.auth.signInWithPassword({ email, password })
    .then((response: AuthResponse) => {
        if (response.data != null) {
          console.log('User', response.data.user);
          setUser(response.data.user)
          setSession(response.data.session)
          setError(null)
        } else if (response.error) {
          setError(response.error)
        } else {
          console.log("Something went wrong");
        }
        setLoading(false)
      })
      .catch(error => {
        console.log("Error", error);
      })
  }

  return (
    <div>
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


    </div>
  );
};

export default Login;
