import styled, { css } from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  ${({ theme }) => css`
    padding: ${theme.SPACE[32]}px ${theme.SPACE[24]}px;
    border-radius: ${theme.RADII.M}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`;
