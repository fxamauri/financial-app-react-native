import { Container } from "./styles";

import { ScreenContentProps } from "./types";

export default function ScreenContent({ children }: ScreenContentProps) {
  return <Container>{children}</Container>;
}
