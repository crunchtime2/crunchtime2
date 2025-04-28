import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-6">MLB Crunch Time</h1>
      <p className="mb-4">Build your team. Dominate the leaderboard.</p>
      <div className="space-x-4">
        <Link href="/register">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
            Register
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}