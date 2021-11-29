import styled from "styled-components";
import { ChevronUp } from "@styled-icons/bootstrap";

export const StyledInstructionsContainer = styled.div`
  position: fixed;
  left: 10px;
  bottom: ${({ instructionsVisible }) => (instructionsVisible ? 0 : "-10rem")};

  height: 10rem;
  width: 15rem;

  background-color: #00bfa5c1;
  color: #eee;

  transition: bottom 0.75s;

  z-index: 2;
`;

export const StyledInstructionsTag = styled.div`
  position: absolute;
  top: -2rem;
  left: 0;

  height: 2rem;
  width: 40px;

  background-color: #00bfa5c1;

  border-radius: 4px 4px 0 0;

  cursor: pointer;
`;

export const StyledInstructionsWrapper = styled.div`
  padding: 0.5rem 1.25rem 0;
`;

export const StyledInstruction = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.25rem;
`;

export const StyledResetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 56px;

  margin-top: 0.5rem;
`;

export const StyledReset = styled.button`
  height: 100%;
  width: 100%;

  border: none;
  outline: none;

  background-color: #eee;
  color: #11171c;

  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.125rem 0 #098868;

  &:hover,
  &:active {
    background-color: #eee;
    box-shadow: 0 0 0 0 #098868;

    cursor: pointer;
  }

  &:active {
    width: 95%;
    height: 95%;
  }
`;
export const StyledChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  ${({ instructionsVisible }) =>
    instructionsVisible
      ? "transform: rotate(180deg)"
      : "transform: rotate(0deg)"};

  transition: transform 0.75s;
`;

export const StyledChevronUp = styled(ChevronUp)`
  height: 1rem;
`;
