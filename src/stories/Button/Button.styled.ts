import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-size: ${(props) => {
    console.log("StyledButton props in styled.ts:", props);
    return props.theme.fonts.fs1;
  }};
  width: "200px";
  height: "100px";
`;
