import styled, { css } from "styled-components/native";

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
