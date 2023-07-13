import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    padding: ${theme.SPACE[16]}px ${theme.SPACE[16]}px ${theme.SPACE[32]}px
      ${theme.SPACE[16]}px;
  `}
`;
