import styled, { css } from "styled-components/native";
import { TypeProps } from "./types";
import { FinancialType } from "../../entities/FinancialRecord";
import Text from "../../../../components/Text";

export const Type = styled(Text).attrs({
  fontFamily: "REGULAR",
})<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${type === FinancialType.INCOME
      ? theme.COLORS.GREEN_100
      : theme.COLORS.ORANGE_50};
  `}
`;

export const ParentTitle = styled(Text).attrs({
  fontFamily: "MEDIUM",
})`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_600};
    margin-right: ${theme.SPACE[16]}px;
    margin: ${theme.SPACE[8]}px 0;
  `}
`;
