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
        <ContentBackButton>
          {showBackButton && <BackButton onPress={backButtonAction} />}
        </ContentBackButton>
        <Title>{title}</Title>
      </Content>
      {!!headerRight && <Content>{headerRight}</Content>}
    </Container>
  );
}
