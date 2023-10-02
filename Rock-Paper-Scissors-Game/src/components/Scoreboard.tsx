import { styled } from "styled-components";
import { UserProperties } from "./componentsTypes";

export const ScoreBoard: React.FC<UserProperties> = ({ score }) => {
  return (
    <ScoreBoardContainer>
      <RowContainer>
        <GameElementsName>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </GameElementsName>
        <ScoreBlock>
          <ScoreTitle>SCORE</ScoreTitle>
          <Score>{score}</Score>
        </ScoreBlock>
      </RowContainer>
    </ScoreBoardContainer>
  );
};

const ScoreBoardContainer = styled.div`
  margin: 30px 10px 30px 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

const RowContainer = styled.div`
  border-radius: 15px;
  border: 2px solid hsl(217, 16%, 45%);
  height: 150px;
  display: flex;
  flex: 100%;
  justify-content: space-between;
  max-width: 700px;
  margin: 10px;
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
