import { GameWrapper } from "./components/Game-wrapper.styled";
import { ScoreBoard } from "./components/Scoreboard";
import { Contest } from "./components/Contest";
import "./App.css";

function App() {
  return (
    <>
      <GameWrapper>
        <ScoreBoard />
        <Contest />
      </GameWrapper>
    </>
  );
}

export default App;
