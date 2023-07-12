import { StyledText } from "./styles";
import { TextProps } from "./types";

export default function Text({
  fontFamily = "REGULAR",
  ...restProps
}: TextProps) {
  return <StyledText fontFamily={fontFamily} {...restProps} />;
}
