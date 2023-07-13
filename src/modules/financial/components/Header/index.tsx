import {
  Container,
  BackButton,
  Title,
  Content,
  ContentBackButton,
} from "./styles";
import { HeaderProps } from "./types";

export default function Header({
  showBackButton = false,
  backButtonAction,
  title,
  headerRight,
}: HeaderProps) {
  return (
    <Container>
      <Content>
        {showBackButton && <BackButton onPress={backButtonAction} />}
        <Title>{title}</Title>
      </Content>
      {!!headerRight && <Content>{headerRight}</Content>}
    </Container>
  );
}
