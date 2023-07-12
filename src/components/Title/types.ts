import { TextProps as TextPropsRN } from "react-native";
import { theme } from "../../config/theme";

export type FontFamily = keyof typeof theme.FONT_FAMILY.TITLE;

export type TitleProps = TextPropsRN & {
  fontFamily?: FontFamily;
};
