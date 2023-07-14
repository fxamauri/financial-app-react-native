import { Container, Title, DeleteButton } from "./styles";

import { FinancialItemItemProps } from "./types";

export default function FinancialItem({
  code,
  title,
  type,
  onDelete,
  onPress,
}: FinancialItemItemProps) {
  return (
    <Container onPress={onPress}>
      <Title type={type}>
        {code} - {title}
      </Title>
      <DeleteButton onPress={onDelete} />
    </Container>
  );
}
