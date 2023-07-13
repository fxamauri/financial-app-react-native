import { TextInputProps } from "react-native";
import { InputBaseProps } from "../InputBase/types";

export type InputVariant = {
  variant?: "pill";
};

export type InputProps = {
  startAdornment?: React.ReactNode;
} & InputVariant &
  TextInputProps &
  Omit<InputBaseProps, "children">;
