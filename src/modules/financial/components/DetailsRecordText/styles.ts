import styled, { css } from "styled-components/native";
import TextBase from "../../../../components/Text";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: ${({ theme }) => theme.SPACE[8]}px 0;
`;

export const Text = styled(TextBase).attrs({
  fontFamily: "MEDIUM",
})`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_600};
    margin-right: ${theme.SPACE[16]}px;
  `}
`;

export const Value = styled(TextBase).attrs({
  fontFamily: "REGULAR",
})`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_600};
    text-align: right;
  `}
`;
