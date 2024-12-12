import { useState } from "react";
import React from "react";
import { useAuth } from "../../../providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Replace with your authentication logic
      if (email === "test@example.com" && password === "password") {
        setUser({ email });
        setError(null);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col min-w-2.5 gap-3 p-3">
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
        className="shadow border rounded-md py-1 px-2 bg-green-600"
        type="submit"
      >
        Sign In
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
