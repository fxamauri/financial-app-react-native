import styled, { css } from "styled-components/native";

import { TextInput } from "react-native";
import Text from "../Text";

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_300};
    margin-bottom: ${theme.SPACE[4]}px;
  `}
`;

export const SInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_200,
}))`
  width: 100%;
  height: 44px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    border-radius: ${theme.RADII.S}px;
  `}
  padding: 8px 16px;
`;
