import { Container, Text, Value } from "./styles";
import { DetailsRecordTextProps } from "./types";

export default function DetailsRecordText({
  text,
  value,
}: DetailsRecordTextProps) {
  return (
    <Container>
      <Text>{text}:</Text>
      {typeof value === "string" ? <Value>{value}</Value> : value}
    </Container>
  );
}
