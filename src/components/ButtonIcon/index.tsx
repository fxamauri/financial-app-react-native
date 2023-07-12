import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconProps } from "./types";

export default function ButtonIcon({
  name,
  size,
  color,
  ...touchableOpacityProps
}: ButtonIconProps) {
  return (
    <TouchableOpacity {...touchableOpacityProps}>
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
