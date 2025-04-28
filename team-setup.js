import { useState } from "react";
import { useRouter } from "next/router";

const samplePlayers = [
  { name: "Player A", position: "C", onBase: 8 },
  { name: "Player B", position: "1B", onBase: 7 },
  { name: "Player C", position: "2B", onBase: 9 },
  { name: "Player D", position: "3B", onBase: 6 },
  { name: "Player E", position: "SS", onBase: 8 },
  { name: "Player F", position: "LF", onBase: 7 },
  { name: "Player G", position: "CF", onBase: 8 },
  { name: "Player H", position: "RF", onBase: 9 },
  { name: "Player I", position: "DH", onBase: 5 },
];

export default function TeamSetup() {
  const router = useRouter();
  const [team, setTeam] = useState([]);

  const handleAddPlayer = (player) => {
    if (team.length < 9) {
      setTeam([...team, player]);
    }
  };

  const handleFinish = () => {
    router.push("/play");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Draft Your Team</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {samplePlayers.map((player, index) => (
          <button
            key={index}
            onClick={() => handleAddPlayer(player)}
            className="bg-gray-700 hover:bg-gray-600 p-4 rounded"
          >
            {player.name} ({player.position})
          </button>
        ))}
      </div>
      <h2 className="text-2xl mb-2">Your Team ({team.length}/9)</h2>
      <ul className="mb-6">
        {team.map((p, idx) => (
          <li key={idx}>
            {p.name} - {p.position}
          </li>
        ))}
      </ul>
      {team.length === 9 && (
        <button
          onClick={handleFinish}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded"
        >
          Finish and Play
        </button>
      )}
    </div>
  );
}