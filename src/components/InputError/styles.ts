import styled, { css } from "styled-components/native";

import Text from "../Text";

export const Message = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.PINK_50};
    margin-top: ${theme.SPACE[2]}px;
  `}
`;
