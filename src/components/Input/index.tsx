import { TextInput } from "react-native";

import { forwardRef } from "react";
import { Content, SInput } from "./styles";
import { InputProps } from "./types";

import InputBase from "../InputBase";

const Input = forwardRef<TextInput, InputProps>(
  ({ label, startAdornment, variant, errorMessage, ...restProps }, ref) => {
    return (
      <InputBase label={label} errorMessage={errorMessage}>
        <Content variant={variant}>
          {startAdornment}
          <SInput ref={ref} {...restProps} />
        </Content>
      </InputBase>
    );
  }
);

Input.displayName = "Input";

export default Input;
