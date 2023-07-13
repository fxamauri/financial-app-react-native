import { Container, Title, DeleteButton } from "./styles";

import { FinancialItemItemProps } from "./types";

export default function FinancialItem({
  code,
  title,
  type,
  onPress,
}: FinancialItemItemProps) {
  return (
    <Container>
      <Title type={type}>
        {code} - {title}
      </Title>
      <DeleteButton onPress={onPress} />
    </Container>
  );
}
