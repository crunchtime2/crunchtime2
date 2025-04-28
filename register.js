import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/team-setup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 py-2 rounded"
        >
          Set Up Team
        </button>
      </form>
    </div>
  );
}