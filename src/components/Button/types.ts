import { TouchableOpacityProps } from "react-native";

export type ButtonVariantProps = {
  variant: "outline" | "danger";
};

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant: ButtonVariantProps["variant"];
};
