import { useState } from "react";

export default function Play() {
  const [score, setScore] = useState(0);
  const [inning, setInning] = useState(1);
  const [outs, setOuts] = useState(0);

  const playAtBat = () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    if (roll >= 15) {
      setScore(score + 1);
    } else {
      setOuts(outs + 1);
      if (outs + 1 >= 3) {
        setOuts(0);
        setInning(inning + 1);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Game Time</h1>
      <p className="text-xl mb-2">Inning: {inning}</p>
      <p className="text-xl mb-2">Outs: {outs}</p>
      <p className="text-xl mb-4">Score: {score}</p>
      <button
        onClick={playAtBat}
        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded"
      >
        Play At-Bat
      </button>
    </div>
  );
}