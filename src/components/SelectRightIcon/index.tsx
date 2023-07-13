import styled from "styled-components/native";

import { AntDesign } from "@expo/vector-icons";

const SelectRightIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.GRAY_500,
  name: "caretdown",
}))``;

export default SelectRightIcon;
