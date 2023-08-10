import { useState } from "react";
import { GameWrapper } from "./components/Game-wrapper.styled";
import { ScoreBoard } from "./components/Scoreboard";
import { Contest } from "./components/Contest";
import "./App.css";

function App() {
  return (
    <>
      <GameWrapper>
        <ScoreBoard></ScoreBoard>
        <Contest></Contest>
      </GameWrapper>
    </>
  );
}

export default App;
