import styled from "styled-components/native";

import ButtonIcon from "../ButtonIcon";

const SelectRightIcon = styled(ButtonIcon).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.GRAY_600,
  name: "keyboard-arrow-down",
}))``;

export default SelectRightIcon;
