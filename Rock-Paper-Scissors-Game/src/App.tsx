import { useState } from "react";
import { GameWrapper } from "./components/game-wrapper.styled";
import { ScoreBoard } from "./components/scoreboard";
import { Contest } from "./components/contest";
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
