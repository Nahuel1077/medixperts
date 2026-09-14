'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg("");

    try{
      const res = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });
      const data = await res.json();

      if (!res.ok){
        setErrorMsg(data.error || "Error creating account");
        setLoading(false);
        return;
      }
      alert("Check your email to confirm your account");

      router.push("/log-in");
    } catch (err) {
      setErrorMsg("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {errorMsg && (
          <p className="text-red-500 mb-2">{errorMsg}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow border rounded w-full py-2 px-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};