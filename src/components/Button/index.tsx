import { ButtonProps } from "./types";
import { Container, Title } from "./styles";

export default function Button({
  title,
  variant,
  ...touchableOpacityProps
}: ButtonProps) {
  return (
    <Container variant={variant} {...touchableOpacityProps}>
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
