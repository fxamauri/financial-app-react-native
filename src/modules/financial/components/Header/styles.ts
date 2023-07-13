import styled, { css } from "styled-components/native";
import ButtonIcon from "../../../../components/ButtonIcon";
import Text from "../../../../components/Text";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.SPACE[16]}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ContentBackButton = styled.View`
  width: 40px;
`;

export const BackButton = styled(ButtonIcon).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.WHITE,
  name: "chevron-left",
}))`
  margin-right: ${({ theme }) => theme.SPACE[12]}px;
`;

export const Title = styled(Text).attrs({
  fontFamily: "MEDIUM",
})`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.L}px;
  `}
`;
