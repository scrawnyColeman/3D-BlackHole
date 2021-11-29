import React, { useState } from "react";
import {
  StyledChevronUp,
  StyledChevronWrapper,
  StyledInstruction,
  StyledInstructionsContainer,
  StyledInstructionsTag,
  StyledInstructionsWrapper,
  StyledReset,
  StyledResetWrapper,
} from "./Instructions.styled";

const Instructions = React.forwardRef((_, orbitRef) => {
  const [instructionsVisible, setInstructions] = useState(false);

  const toggleInstructions = () => {
    setInstructions((prevState) => !prevState);
  };

  const reset = () => {
    orbitRef.current.reset();
    setInstructions(false);
  };

  return (
    <StyledInstructionsContainer instructionsVisible={instructionsVisible}>
      <StyledInstructionsTag onClick={toggleInstructions}>
        <StyledChevronWrapper instructionsVisible={instructionsVisible}>
          <StyledChevronUp />
        </StyledChevronWrapper>
      </StyledInstructionsTag>
      <StyledInstructionsWrapper>
        <StyledInstruction>
          <strong>[Right-Click]:</strong>&nbsp;&nbsp;Pan
        </StyledInstruction>
        <StyledInstruction>
          <strong>[Left-Click]:</strong>&nbsp;&nbsp;Rotate
        </StyledInstruction>
        <StyledInstruction>
          <strong>[Scroll]:</strong>&nbsp;&nbsp;Zoom
        </StyledInstruction>

        <StyledInstruction>
          <strong>Enjoy! 🚀</strong>
        </StyledInstruction>

        <StyledResetWrapper>
          <StyledReset onClick={reset}>Reset</StyledReset>
        </StyledResetWrapper>
      </StyledInstructionsWrapper>
    </StyledInstructionsContainer>
  );
});

export default Instructions;
