import styled, { css } from "styled-components/native";

import Text from "../Text";

export const Container = styled.View`
  width: 100%;
  margin: ${({ theme }) => theme.SPACE[8]}px 0;
`;

export const Label = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_600};
    margin-bottom: ${theme.SPACE[4]}px;
  `}
`;
