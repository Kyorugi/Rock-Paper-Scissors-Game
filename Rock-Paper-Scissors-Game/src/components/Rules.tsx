import { styled } from "styled-components";
import React from "react";
import Modal from "react-modal";

export const RulesModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "transparent",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <RulesContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ButtonBlock>
          <h2
            style={{
              color:
                "hsl(216.66666666666663, 19.78021978021978%, 35.686274509803916%)",
            }}
          >
            RULES
          </h2>

          <img
            src="/icon-close.svg"
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          />
        </ButtonBlock>
        <img src="/image-rules.svg" />
      </Modal>
      <RulerButton onClick={openModal}>RULES</RulerButton>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
  display: flex;
  justify-content: end;
  min-width: 1200px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RulerButton = styled.button`
  border: 2px solid
    hsl(218.1818181818182, 14.53744493392071%, 55.490196078431374%);
  border-radius: 5px;
  background-color: transparent;
  font-family: "Barlow Semi Condensed", sans-serif;
  letter-spacing: 1.5px;
  color: #fff;
  width: 100px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff74;
  }
`;
