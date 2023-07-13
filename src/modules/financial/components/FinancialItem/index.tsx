import { Container, Title, DeleteButton } from "./styles";

import { FinancialItemItemProps } from "./types";

export default function FinancialItem({
  title,
  type,
  onPress,
}: FinancialItemItemProps) {
  return (
    <Container>
      <Title type={type}>{title}</Title>
      <DeleteButton onPress={onPress} />
    </Container>
  );
}
