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

export const Game: React.FC<UserProperties> = ({
  myChoice,
  score,
  setScore,
}) => {
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
    if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      if (setScore && score !== undefined) {
        setScore(score - 1);
      }
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      if (setScore && score !== undefined) {
        setScore(score + 1);
      }
    } else if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      if (setScore && score !== undefined) {
        setScore(score + 1);
      }
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      if (setScore && score !== undefined) {
        setScore(score - 1);
      }
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      if (setScore && score !== undefined) {
        setScore(score - 1);
      }
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      if (setScore && score !== undefined) {
        setScore(score + 1);
      }
    } else {
      setPlayerWin("draw");
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

  return (
    <PlayContainer>
      <GameYou>
        <YouText>You Picked</YouText>
        {myChoice === "paper" && (
          <Paper>
            <PaperImg src="icon-paper.svg" alt="paper" />
          </Paper>
        )}
        {myChoice === "scissors" && (
          <Scissors>
            <ScissorsImg src="icon-scissors.svg" alt="scissors" />
          </Scissors>
        )}
        {myChoice === "rock" && (
          <Rock>
            <RockImg src="icon-rock.svg" alt="rock" />
          </Rock>
        )}
      </GameYou>
      <GameHouse>
        <HouseText>The House Picked</HouseText>
        {count == 0 ? (
          <div>
            {" "}
            {house === "paper" && (
              <Paper>
                <PaperImg src="icon-paper.svg" alt="paper" />
              </Paper>
            )}
            {house === "scissors" && (
              <Scissors>
                <ScissorsImg src="icon-scissors.svg" alt="scissors" />
              </Scissors>
            )}
            {house === "rock" && (
              <Rock>
                <RockImg src="icon-rock.svg" alt="rock" />
              </Rock>
            )}
          </div>
        ) : (
          <div>{count}</div>
        )}
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

const YouText = styled.span`
  color: white;
`;

const HouseText = styled.span`
  color: white;
`;
