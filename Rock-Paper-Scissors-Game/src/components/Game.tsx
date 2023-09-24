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
import { ResultMapping, ChoiceProps } from "./componentsTypes";
import { Link } from "react-router-dom";

export const Game: React.FC<UserProperties> = ({ myChoice, setScore }) => {
  const [house, setHouse] = useState<string>("");
  const [playerWin, setPlayerWin] = useState<string>("");
  const [count, setCount] = useState<number>(3);
  const [showButton, setShowButton] = useState<boolean>();
  const [showResult, setShowResult] = useState<string>();

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

  useEffect(() => {
    if (playerWin === "win" || playerWin === "lose" || playerWin === "draw") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [playerWin]);

  useEffect(() => {
    if (playerWin === "win") {
      setShowResult("YOU WIN");
    }
    if (playerWin === "lose") {
      setShowResult("YOU LOSE");
    } else if (playerWin === "draw") {
      setShowResult("DRAW");
    }
  });

  return (
    <PlayContainer>
      <GameYou>
        <YouText>YOU PICKED</YouText>
        <GameChoice choice={myChoice} />
      </GameYou>
      {showButton && (
        <ResultContainer>
          <ShowResult>{showResult}</ShowResult>
          <Link to="/" className="playAgain">
            PLAY AGAIN
          </Link>
        </ResultContainer>
      )}
      <GameHouse>
        <HouseText>THE HOUSE PICKED</HouseText>
        {count === 0 ? (
          <div>
            <GameChoice choice={house} />
          </div>
        ) : (
          <Counting>{count}</Counting>
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
  color: #fff;
`;

const HouseText = styled.span`
  color: #fff;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShowResult = styled.span`
  font-size: 33px;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Counting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 250px;
  width: 250px;
  font-size: 100px;
  color: #fff;
  border-radius: 50%;
  background-color: #16213d;
`;
