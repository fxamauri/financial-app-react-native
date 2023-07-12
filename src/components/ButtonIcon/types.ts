import { ComponentProps } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type MaterialIconsProps = ComponentProps<typeof MaterialIcons>;

export type ButtonIconProps = TouchableOpacityProps & {
  name?: MaterialIconsProps["name"];
  size?: MaterialIconsProps["size"];
  color?: MaterialIconsProps["color"];
};
