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
import "../index.css";

export const Game: React.FC<UserProperties> = ({ myChoice, setScore }) => {
  const [house, setHouse] = useState<string>("");
  const [playerWin, setPlayerWin] = useState<string>("");
  const [count, setCount] = useState<number>(3);
  const [showButton, setShowButton] = useState<boolean>();
  const [showResult, setShowResult] = useState<string>();
  const [houseWin, setHouseWin] = useState<boolean>();

  const housePick = () => {
    const choices = ["paper", "scissors", "rock"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    housePick();
  }, []);

  function RestartGame() {
    if (setScore) {
      setScore(0);
    }
  }

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
    const [baseStyles, setBaseStyles] = useState({
      width: "220px",
      height: "220px",
      borderWidth: "25px",
      borderColor: "",
      margin: "0",
    });

    const [imgStyle, setImgStyle] = useState({
      width: "75px",
      height: "80px",
    });

    const winStyles = {
      boxShadow:
        "0px 0px 0px 30px rgba(255, 255, 255, 0.07), " +
        "0px 0px 0px 70px rgba(255, 255, 255, 0.05), " +
        "0px 0px 0px 110px rgba(255, 255, 255, 0.025)",
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 810) {
        setBaseStyles({
          ...baseStyles,
          width: "150px",
          height: "150px",
          borderWidth: "20px",
          borderColor: "",
        });
        setImgStyle({
          ...imgStyle,
          width: "45px",
          height: "50px",
        });
      } else {
        setBaseStyles((prevStyles) => ({
          ...prevStyles,
          width: "220px",
          height: "220px",
          borderWidth: "25px",
          borderColor: "",
        }));
        setImgStyle((prevStyle) => ({
          ...prevStyle,
          width: "75px",
          height: "80px",
        }));
      }

      const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, [screenWidth]);

    if (playerWin === "win" && house !== choice) {
      Object.assign(baseStyles, winStyles);
    } else if (playerWin === "lose" && houseWin === true && house === choice) {
      Object.assign(baseStyles, winStyles);
    }

    return (
      <>
        {choice === "paper" && (
          <Paper
            className="choice"
            style={{ ...baseStyles, borderColor: "hsl(230, 89%, 62%)" }}
          >
            <PaperImg
              src={`icon-${choice}.svg`}
              alt="paper"
              style={{ ...imgStyle }}
            />
          </Paper>
        )}
        {choice === "scissors" && (
          <Scissors
            className="choice"
            style={{ ...baseStyles, borderColor: "hsl(39, 89%, 49%)" }}
          >
            <ScissorsImg
              src={`icon-${choice}.svg`}
              alt="scissors"
              style={{ ...imgStyle }}
            />
          </Scissors>
        )}
        {choice === "rock" && (
          <Rock
            className="choice"
            style={{ ...baseStyles, borderColor: "hsl(349, 71%, 52%)" }}
          >
            <RockImg
              src={`icon-${choice}.svg`}
              alt="rock"
              style={{ ...imgStyle }}
            />
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
      setHouseWin(false);
    }
    if (playerWin === "lose") {
      setShowResult("YOU LOSE");
      setHouseWin(true);
    } else if (playerWin === "draw") {
      setShowResult("DRAW");
    }
  });

  return (
    <PlayContainer>
      <GameYou className="passageOfBlocks">
        <YouText>YOU PICKED</YouText>
        <GameChoice choice={myChoice} />
      </GameYou>
      {showButton && (
        <ResultContainer className="passageOfBlocks">
          <ShowResult>{showResult}</ShowResult>
          <Link to="/" className="playAgain">
            PLAY AGAIN
          </Link>
          <Link to="/" className="playAgain" onClick={RestartGame}>
            RESTART GAME
          </Link>
        </ResultContainer>
      )}
      <GameHouse className="passageOfBlocks">
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
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 495px) {
    justify-content: center;
    flex-wrap: wrap;
    .passageOfBlocks {
      order: 0;
      margin: 20px;
    }

    .passageOfBlocks:nth-child(2) {
      order: 2;
    }

    .passageOfBlocks:nth-child(3) {
      order: 1;
    }
  }

  @media (max-width: 645px) {
    .passageOfBlocks {
      margin: 15px;
    }
  }
`;

const GameYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 495px) {
    flex-direction: column-reverse;
  }
`;

const GameHouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 495px) {
    flex-direction: column-reverse;
  }
`;

const YouText = styled.span`
  color: #fff;
  margin: 5px 0px 40px;

  @media (max-width: 537px) {
    margin-top: 40px;
  }
`;

const HouseText = styled.span`
  color: #fff;
  margin: 5px 0px 40px;

  @media (max-width: 537px) {
    margin-top: 40px;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  margin: 70px;
`;

const ShowResult = styled.span`
  font-size: 33px;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  letter-spacing: 5px;
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
