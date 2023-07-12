import styled, { css } from "styled-components/native";
import { TitleProps } from "./types";
import Text from "../../../../components/Text";
import ButtonIcon from "../../../../components/ButtonIcon";
import { FinancialType } from "../../entities/FinancialRecord";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-radius: ${theme.RADII.M}px;
    padding: 0px ${theme.SPACE[12]}px;
  `}
`;

export const Title = styled(Text)<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${type === FinancialType.INCOME
      ? theme.COLORS.GREEN_100
      : theme.COLORS.ORANGE_50};
  `}
`;

export const DeleteButton = styled(ButtonIcon).attrs(({ theme }) => ({
  size: 34,
  color: theme.COLORS.GRAY_100,
  name: "delete-outline",
}))``;
