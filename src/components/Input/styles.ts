import styled, { css } from "styled-components/native";

import { TextInput } from "react-native";
import { InputVariant } from "./types";

export const Content = styled.View<InputVariant>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  ${({ theme, variant }) => css`
    padding-left: ${variant === "pill" ? theme.SPACE[24] : 0}px;
    height: ${variant === "pill" ? 55 : 44}px;
    border-radius: ${variant === "pill" ? theme.RADII.XXL : theme.RADII.S}px;
    background-color: ${theme.COLORS.WHITE};
  `}
`;

export const SInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_200,
}))`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.TEXT.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
  padding: 8px 16px;
`;
