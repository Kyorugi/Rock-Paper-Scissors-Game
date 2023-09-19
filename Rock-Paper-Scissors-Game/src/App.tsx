import { GameWrapper } from "./components/Game-wrapper.styled";
import { ScoreBoard } from "./components/Scoreboard";
import { Contest } from "./components/Contest";
// import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import { ScorePoints } from "./components/componentsTypes";

function App() {
  // const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <GameWrapper>
        <ScoreBoard score={score} />
        <Contest />
      </GameWrapper>
    </>
  );
}

export default App;
