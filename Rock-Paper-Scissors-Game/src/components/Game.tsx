import { styled } from "styled-components";
import { UserProperties } from "./componentsTypes";

export const Game: React.FC<UserProperties> = ({}) => {
  return (
    <PlayContainer>
      <GameYou>
        <YouText>You Picked</YouText>
      </GameYou>
      <GameHouse>
        <HouseText>The House Picked</HouseText>
      </GameHouse>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const GameYou = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameHouse = styled.div`
  display: flex;
  flex-direction: column;
`;

const YouText = styled.span``;

const HouseText = styled.span``;
