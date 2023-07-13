import styled from "styled-components/native";
import ButtonIcon from "../../../../components/ButtonIcon";

const AddButton = styled(ButtonIcon).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.WHITE,
  name: "plus",
}))``;

export default AddButton;
