import React from "react";
import "./styles.css";
import { useState } from "react";

const gamesDB = {
  Action: [
    {
      name: "PUBG-PC",
      description:
        "It is an amazing First Person Shooter Battle Royale game with 5 different maps!",
      rating: "Rating: 5/5"
    },

    {
      name: "Call Of Duty",
      description:
        "It features gritty, grounded, fluid Multiplayer combat, the biggest Zombies offering ever with four full undead adventures!",
      rating: "Rating: 4.5/5"
    },

    {
      name: "Fortnite",
      description:
        "It is a free Battle Royale Game which is famous for it's game modes and emoticons!",
      rating: "Rating: 4/5"
    }
  ],

  RacingGames: [
    {
      name: "Forza Hoizon 4",
      description:
        "This racing game is published by Microsoft Studios and is one of the most epic car simulation!",
      rating: "Rating: 5/5"
    },

    {
      name: "Dirt Rally",
      description:
        "The game is loaded with real life rally locations maps which definetely gives you an adrenaline rush!",
      rating: "Rating: 5/5"
    },

    {
      name: "Need For Speed",
      description:
        "Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas!",
      rating: "Rating: 4/5"
    }
  ],

  Simulation: [
    {
      name: "Microsoft Flight Simulator",
      description:
        "It is one of the costliest games by Microsoft in which we can fly real life aeroplanes!",
      rating: "Rating: 5/5"
    },

    {
      name: "Minecraft",
      description:
        "The most popular game on youtube! It has a big fan base and community!",
      rating: "Rating: 4/5"
    },

    {
      name: "GTA 5",
      description:
        "If you like to play characters and story mode games. Then this is the best one available!",
      rating: "Rating: 4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGame, setGame] = useState("Simulation");
  function gameClickHandler(game) {
    setGame(game);
  }
  return (
    <div className="App">
      <h1>Best Games</h1>
      <p>The games collection that you can enjoy anytime!</p>

      <div>
        {Object.keys(gamesDB).map((game) => (
          <button
            onClick={() => gameClickHandler(game)}
            style={{
              cursor: "pointer",
              backgroundColor: "#eeeeee",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              borderRadius: "0.2rem"
            }}
          >
            {game}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {gamesDB[selectedGame].map((games) => (
            <li
              key={games.name}
              style={{
                listStyle: "none",
                padding: "0.8rem",
                width: "90%",
                background: "#EAFFFD",
                margin: "1rem auto",
                border: "2px solid black",
                borderRadius: "0.3rem"
              }}
            >
              {" "}
              <span style={{ fontSize: "larger" }}>{games.name}</span>
              <div style={{ fontWeight: "lighter", padding: "0.5rem" }}>
                {" "}
                {games.description}{" "}
              </div>
              <div style={{ fontWeight: "light", fontStyle: "italic" }}>
                {" "}
                {games.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}
