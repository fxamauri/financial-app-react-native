import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";
import { ButtonVariantProps } from "./types";
import Text from "../Text";

const getVariantStyleContainer = (theme: DefaultTheme) => {
  return {
    danger: css`
      border-radius: ${theme.RADII.XXL}px;
      background-color: ${theme.COLORS.PINK_50};
    `,
    outline: css``,
  };
};

export const Container = styled(TouchableOpacity)<ButtonVariantProps>`
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.SPACE[12]}px ${theme.SPACE[16]}px;
  `}
  ${({ theme, variant }) => getVariantStyleContainer(theme)[variant]}
`;

const getVariantStyleTitle = (theme: DefaultTheme) => {
  return {
    danger: css`
      color: ${theme.COLORS.WHITE};
    `,
    outline: css`
      color: ${theme.COLORS.PINK_50};
    `,
  };
};

export const Title = styled(Text)<ButtonVariantProps>`
  ${({ theme, variant }) => getVariantStyleTitle(theme)[variant]}
`;
