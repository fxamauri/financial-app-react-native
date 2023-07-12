import { PickerSelectProps } from "react-native-picker-select";
import { InputBaseProps } from "../InputBase/types";

export type SelectProps = Omit<InputBaseProps, "children"> & PickerSelectProps;
