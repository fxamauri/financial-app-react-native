import styled, { css } from "styled-components/native";
import { TextProps } from "./types";

export const StyledText = styled.Text<Pick<TextProps, "fontFamily">>`
  ${({ theme, fontFamily = "REGULAR" }) => css`
    font-family: ${theme.FONT_FAMILY.TEXT[fontFamily]};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`;
