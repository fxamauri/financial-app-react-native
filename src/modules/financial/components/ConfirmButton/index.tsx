import styled from "styled-components/native";
import ButtonIcon from "../../../../components/ButtonIcon";

const ConfirmButton = styled(ButtonIcon).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.WHITE,
  name: "check",
}))``;

export default ConfirmButton;
