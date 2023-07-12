import { TextInput } from "react-native";

import { forwardRef } from "react";
import { Container, Label, SInput } from "./styles";
import { InputProps } from "./types";
import InputError from "../InputError";

const Input = forwardRef<TextInput, InputProps>(
  ({ label, errorMessage, ...restProps }, ref) => {
    return (
      <Container>
        <Label fontFamily="MEDIUM">{label}</Label>
        <SInput ref={ref} {...restProps} />
        <InputError message={errorMessage} />
      </Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
