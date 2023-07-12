import { TextInputProps } from "react-native";
import { InputBaseProps } from "../InputBase/types";

export type InputProps = TextInputProps & Omit<InputBaseProps, "children">;
