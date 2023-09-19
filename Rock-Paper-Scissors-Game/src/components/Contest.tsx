import { styled } from "styled-components";

export const Contest = () => {
  return (
    <GameContainer>
      <Paper>
        <PaperImg src="icon-paper.svg" alt="paper" />
      </Paper>
      <Scissors>
        <ScissorsImg src="icon-scissors.svg" alt="scissors" />
      </Scissors>
      <Rock>
        <RockImg src="icon-rock.svg" alt="scissors" />
      </Rock>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  margin-top: 20px;
  width: 476px;
  min-height: 430px;
  background-image: url("bg-triangle.svg");
  background-position: center;
  background-repeat: no-repeat;
  visibility: visible;
  opacity: 1;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  img {
    width: 45px;
    height: 55px;
    box-shadow:
      inset 0px 5px 6px grey,
      0px 8px darken($color, 15%);
    /* display: block; */
  }
`;

const Paper = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  border: 18px solid;
  border-color: hsl(230, 89%, 62%);
  background-color: #ffffffd4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-right: 70px;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  box-shadow: 0px 5px 0px
    hsla(229.88372093023256, 88.659793814433%, 61.96078431372549%, 0.752);
`;

const PaperImg = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  /* box-shadow: 0px -5px 0px #ffffff43; */
`;

const Scissors = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  border: 18px solid;
  border-color: hsl(39, 89%, 49%);
  background-color: #ffffffd4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: 70px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  box-shadow: 0px 5px 0px
    hsla(38.91891891891891, 88.79999999999998%, 49.01960784313726%, 0.634);
`;

const ScissorsImg = styled.img``;

const Rock = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  border: 18px solid;
  border-color: hsl(349, 71%, 52%);
  background-color: #ffffffd4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  box-shadow: 0px 5px 0px
    hsla(348.9655172413793, 71.31147540983608%, 52.156862745098046%, 0.732);
`;

const RockImg = styled.img``;
