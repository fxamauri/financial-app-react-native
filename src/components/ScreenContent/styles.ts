import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_50};
    padding: ${theme.SPACE[24]}px ${theme.SPACE[24]}px;
    border-top-left-radius: ${theme.RADII.L};
    border-top-right-radius: ${theme.RADII.L};
  `}
`;
