import styled from "styled-components";

interface SpacerProps {
  flex?: number;
  height?: number;
  width?: number;
}

export const StyledSpacer = styled.div<SpacerProps>`
  height: ${(props) => props.height && `${props.height}rem`};
  width: ${(props) => props.width && `${props.width}rem`};
  flex: ${(props) => props.flex};
`;
