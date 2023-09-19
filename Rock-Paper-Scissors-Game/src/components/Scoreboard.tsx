import { styled } from "styled-components";
import { ScorePoints } from "./componentsTypes";

export const ScoreBoard: React.FC<ScorePoints> = ({ score }) => {
  return (
    <ScoreBoardContainer>
      <GameElementsName>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </GameElementsName>
      <ScoreBlock>
        <p>SCORE</p>
        <p>{score}</p>
      </ScoreBlock>
    </ScoreBoardContainer>
  );
};

const ScoreBoardContainer = styled.div`
  margin: 40px;
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 150px;
  border-radius: 15px;
  border: 2px solid hsl(217, 16%, 45%);
`;

const GameElementsName = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: white;
  margin: 10px 15px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 130px;
  width: 175px;
`;

const ScoreBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 140px;
  height: 120px;
  margin: 10px 15px 10px 20px;
  padding-top: 10px;
  border-radius: 10px;
`;
