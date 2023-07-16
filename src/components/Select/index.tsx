import PickerSelect from "react-native-picker-select";

import { Platform } from "react-native";
import { SelectProps } from "./types";
import SelectRightIcon from "../SelectRightIcon";
import { theme } from "../../config/theme";
import InputBase from "../InputBase";

export default function Select({
  label,
  errorMessage,
  ...pickerSelectProps
}: SelectProps) {
  const { disabled } = pickerSelectProps;
  return (
    <InputBase label={label} errorMessage={errorMessage}>
      <PickerSelect
        useNativeAndroidPickerStyle={false}
        Icon={SelectRightIcon}
        style={{
          iconContainer: {
            top: 15,
            right: 12,
          },
          inputIOS: {
            fontSize: theme.FONT_SIZE.S,
            fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
            height: 44,
            color: theme.COLORS.GRAY_800,
          },
          inputAndroid: {
            fontSize: theme.FONT_SIZE.S,
            fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
            height: 44,
            color: theme.COLORS.GRAY_800,
            backgroundColor: disabled
              ? theme.COLORS.GRAY_100
              : theme.COLORS.WHITE,
            borderRadius: theme.RADII.S,
            paddingLeft: theme.SPACE[12],
          },

          viewContainer: {
            borderRadius: theme.RADII.S,
            backgroundColor: disabled
              ? theme.COLORS.GRAY_100
              : theme.COLORS.WHITE,
            paddingLeft: theme.SPACE[12],
          },
          placeholder: {
            fontSize: theme.FONT_SIZE.S,
            fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
            color: theme.COLORS.GRAY_200,
            paddingLeft:
              Platform.OS === "ios" ? theme.SPACE[4] : theme.SPACE[12],
          },
        }}
        placeholder={{
          label: "Selecione",
          value: "",
          color: theme.COLORS.GRAY_200,
        }}
        {...pickerSelectProps}
      />
    </InputBase>
  );
}
