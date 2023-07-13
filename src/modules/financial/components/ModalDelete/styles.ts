import { css, styled } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import Title from "../../../../components/Title";

export const Body = styled.View`
  align-items: center;
`;

export const TextContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.SPACE[16]}px;
`;

export const TextTitle = styled(Title)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_400};
    margin-bottom: ${theme.SPACE[4]}px;
  `}
`;
export const TextSubtitle = styled(Title).attrs({
  fontFamily: "BOLD",
})`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const DeleteIcon = styled(Feather).attrs(({ theme }) => ({
  size: 44,
  color: theme.COLORS.PINK_50,
}))``;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.SPACE[24]}px;
`;

export const ButtonContainer = styled.View`
  margin: 0px ${({ theme }) => theme.SPACE[4]}px;
`;
