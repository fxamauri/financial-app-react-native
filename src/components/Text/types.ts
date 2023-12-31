import { TextProps as TextPropsRN } from "react-native";
import { theme } from "../../config/theme";

export type FontFamily = keyof typeof theme.FONT_FAMILY.TEXT;

export type TextProps = TextPropsRN & {
  fontFamily?: FontFamily;
};
