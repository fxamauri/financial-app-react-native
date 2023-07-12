import styled from "styled-components/native";
import { TextProps } from "./types";

export const StyledText = styled.Text<Pick<TextProps, "fontFamily">>`
  font-family: ${({ theme, fontFamily = "REGULAR" }) =>
    theme.FONT_FAMILY[fontFamily]};
`;
