import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;
`;
