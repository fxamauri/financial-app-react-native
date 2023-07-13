import { Container, Label } from "./styles";
import { InputBaseProps } from "./types";
import InputError from "../InputError";

export default function InputBase({
  label,
  errorMessage,
  children,
}: InputBaseProps) {
  return (
    <Container>
      {label && <Label fontFamily="MEDIUM">{label}</Label>}
      {children}
      <InputError message={errorMessage} />
    </Container>
  );
}
