import { styled } from "styled-components";
import { UserProperties } from "./componentsTypes";
import { useEffect, useState } from "react";
import {
  PaperImg,
  Paper,
  ScissorsImg,
  Scissors,
  RockImg,
  Rock,
} from "./Contest";
import { ResultMapping } from "./componentsTypes";
import { ChoiceProps } from "./componentsTypes";

export const Game: React.FC<UserProperties> = ({ myChoice, setScore }) => {
  const [house, setHouse] = useState<string>("");
  const [playerWin, setPlayerWin] = useState<string>("");
  const [count, setCount] = useState<number>(3);

  const housePick = () => {
    const choices = ["paper", "scissors", "rock"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    housePick();
  }, []);

  const result = () => {
    const resultMapping: ResultMapping = {
      "paper-scissors": "lose",
      "paper-rock": "win",
      "rock-scissors": "win",
      "rock-paper": "lose",
      "scissors-rock": "lose",
      "scissors-paper": "win",
    };

    const resultKey = `${myChoice}-${house}`;
    const playerResult: string = resultMapping[resultKey] || "draw";

    setPlayerWin(playerResult);

    if (setScore) {
      setScore((prevScore) => {
        switch (playerResult) {
          case "win":
            return prevScore + 1;
          case "lose":
            return prevScore - 1;
          default:
            return prevScore;
        }
      });
    }
  };

  useEffect(() => {
    const timer: number | void =
      count > 0
        ? setInterval(() => {
            setCount(count - 1);
          }, 1000)
        : result();
    return () => {
      if (timer !== undefined) {
        clearInterval(timer);
      }
    };
  }, [count, house]);

  const GameChoice: React.FC<ChoiceProps> = ({ choice }) => {
    return (
      <>
        {choice === "paper" && (
          <Paper>
            <PaperImg src={`icon-${choice}.svg`} alt="paper" />
          </Paper>
        )}
        {choice === "scissors" && (
          <Scissors>
            <ScissorsImg src={`icon-${choice}.svg`} alt="scissors" />
          </Scissors>
        )}
        {choice === "rock" && (
          <Rock>
            <RockImg src={`icon-${choice}.svg`} alt="rock" />
          </Rock>
        )}
      </>
    );
  };

  return (
    <PlayContainer>
      <GameYou>
        <YouText>You Picked</YouText>
        <GameChoice choice={myChoice} />
      </GameYou>
      <GameHouse>
        <HouseText>The House Picked</HouseText>
        {count === 0 ? (
          <div>
            <GameChoice choice={house} />
          </div>
        ) : (
          <div>{count}</div>
        )}
      </GameHouse>
    </PlayContainer>
  );
  // return (
  //   <PlayContainer>
  //     <GameYou>
  //       <YouText>You Picked</YouText>
  //       {myChoice === "paper" && (
  //         <Paper>
  //           <PaperImg src={`icon-${myChoice}.svg`} alt="paper" />
  //         </Paper>
  //       )}
  //       {myChoice === "scissors" && (
  //         <Scissors>
  //           <ScissorsImg src={`icon-${myChoice}.svg`} alt="scissors" />
  //         </Scissors>
  //       )}
  //       {myChoice === "rock" && (
  //         <Rock>
  //           <RockImg src={`icon-${myChoice}.svg`} alt="rock" />
  //         </Rock>
  //       )}
  //     </GameYou>
  //     <GameHouse>
  //       <HouseText>The House Picked</HouseText>
  //       {count == 0 ? (
  //         <div>
  //           {" "}
  //           {house === "paper" && (
  //             <Paper>
  //               <PaperImg src={`icon-${myChoice}.svg`} alt="paper" />
  //             </Paper>
  //           )}
  //           {house === "scissors" && (
  //             <Scissors>
  //               <ScissorsImg src={`icon-${myChoice}.svg`} alt="scissors" />
  //             </Scissors>
  //           )}
  //           {house === "rock" && (
  //             <Rock>
  //               <RockImg src={`icon-${myChoice}.svg`} alt="rock" />
  //             </Rock>
  //           )}
  //         </div>
  //       ) : (
  //         <div>{count}</div>
  //       )}
  //     </GameHouse>
  //   </PlayContainer>
  // );
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

const YouText = styled.span`
  color: white;
`;

const HouseText = styled.span`
  color: white;
`;
