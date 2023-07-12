import { Container, HeaderContentList, AccountNumberRows } from "./styles";
import Title from "../../components/Title";
import ScreenContent from "../../components/ScreenContent";

export default function MainScreen() {
  return (
    <Container>
      <ScreenContent>
        <HeaderContentList>
          <Title>Listagem</Title>
          <AccountNumberRows>27 registros</AccountNumberRows>
        </HeaderContentList>
      </ScreenContent>
    </Container>
  );
}
