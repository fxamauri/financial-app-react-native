import PickerSelect from "react-native-picker-select";

import { SelectProps } from "./types";
import SelectRightIcon from "../SelectRightIcon";
import { theme } from "../../config/theme";
import InputBase from "../InputBase";

export default function Select({
  label,
  errorMessage,
  ...pickerSelectProps
}: SelectProps) {
  return (
    <InputBase label={label} errorMessage={errorMessage}>
      <PickerSelect
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
            color: theme.COLORS.GRAY_700,
          },
          inputAndroid: {
            fontSize: theme.FONT_SIZE.S,
            fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
            height: 44,
            color: theme.COLORS.GRAY_700,
          },
          viewContainer: {
            borderRadius: theme.RADII.S,
            backgroundColor: theme.COLORS.WHITE,
            paddingLeft: theme.SPACE[12],
          },
          placeholder: {
            fontSize: theme.FONT_SIZE.S,
            fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
            color: theme.COLORS.GRAY_200,
            paddingLeft: theme.SPACE[4],
          },
        }}
        placeholder={{
          label: "Selecione",
          value: null,
          color: theme.COLORS.GRAY_200,
        }}
        {...pickerSelectProps}
      />
    </InputBase>
  );
}
