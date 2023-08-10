import { styled } from "styled-components";

export const Contest = () => {
  return <GameContainer></GameContainer>;
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
  flex-wrap: wrap;
  justify-content: center;
`;
