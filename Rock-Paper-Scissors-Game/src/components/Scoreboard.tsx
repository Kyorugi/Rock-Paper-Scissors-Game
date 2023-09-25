import { styled } from "styled-components";
import { UserProperties } from "./componentsTypes";

export const ScoreBoard: React.FC<UserProperties> = ({ score }) => {
  return (
    <ScoreBoardContainer>
      <GameElementsName>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </GameElementsName>
      <ScoreBlock>
        <ScoreTitle>SCORE</ScoreTitle>
        <Score>{score}</Score>
      </ScoreBlock>
    </ScoreBoardContainer>
  );
};

const ScoreBoardContainer = styled.div`
  margin: 40px 0px 0px;
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
  justify-content: center;
  background-color: white;
  width: 140px;
  height: 120px;
  margin: 10px 15px 10px 20px;
  padding-top: 10px;
  border-radius: 10px;
`;

const Score = styled.p`
  color: hsl(217, 16%, 45%);
  font-size: 52px;
`;

const ScoreTitle = styled.p`
  color: hsl(229, 64%, 46%);
  font-size: 17px;
`;
