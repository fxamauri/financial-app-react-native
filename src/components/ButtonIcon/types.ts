import { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type MaterialIconsProps = ComponentProps<typeof Feather>;

export type ButtonIconProps = TouchableOpacityProps & {
  name?: MaterialIconsProps["name"];
  size?: MaterialIconsProps["size"];
  color?: MaterialIconsProps["color"];
};
