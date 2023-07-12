import styled, { css } from "styled-components/native";
import { TitleProps } from "./types";

export const StyledText = styled.Text<Pick<TitleProps, "fontFamily">>`
  ${({ theme, fontFamily = "REGULAR" }) => css`
    font-family: ${theme.FONT_FAMILY.TITLE[fontFamily]};
    font-size: ${theme.FONT_SIZE.M}px;
  `}
`;
