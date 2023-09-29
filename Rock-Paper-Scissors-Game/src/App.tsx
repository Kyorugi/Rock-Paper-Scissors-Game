import { GameWrapper } from "./components/Game-wrapper.styled";
import { ScoreBoard } from "./components/Scoreboard";
import { Contest } from "./components/Contest";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { RulesModal } from "./components/Rules";

function App() {
  const [myChoice, setMyChoice] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <GameWrapper>
        <ScoreBoard score={score} />
        <Routes>
          <Route path="/" element={<Contest setMyChoice={setMyChoice} />} />
          <Route
            path="game"
            element={<Game myChoice={myChoice} setScore={setScore} />}
          />
        </Routes>
        <RulesModal />
      </GameWrapper>
    </>
  );
}

export default App;
