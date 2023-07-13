import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonIconProps } from "./types";

export default function ButtonIcon({
  name,
  size,
  color,
  ...touchableOpacityProps
}: ButtonIconProps) {
  return (
    <TouchableOpacity {...touchableOpacityProps}>
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
