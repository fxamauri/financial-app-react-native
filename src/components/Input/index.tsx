import { TextInput } from "react-native";

import { forwardRef } from "react";
import { SInput } from "./styles";
import { InputProps } from "./types";

import InputBase from "../InputBase";

const Input = forwardRef<TextInput, InputProps>(
  ({ label, errorMessage, ...restProps }, ref) => {
    return (
      <InputBase label={label} errorMessage={errorMessage}>
        <SInput ref={ref} {...restProps} />
      </InputBase>
    );
  }
);

Input.displayName = "Input";

export default Input;
