import { StyledText } from "./styles";
import { TitleProps } from "./types";

export default function Title({
  fontFamily = "REGULAR",
  ...restProps
}: TitleProps) {
  return <StyledText fontFamily={fontFamily} {...restProps} />;
}
