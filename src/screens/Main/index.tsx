import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import Text from "../../components/Text";
import Input from "../../components/Input";

export default function MainScreen() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Text
        fontFamily="MEDIUM"
        onPress={() => {
          navigate("NewAccount");
        }}
      >
        Main
      </Text>
      <Input
        label="Código"
        placeholder="código da conta aqui"
        keyboardType="numeric"
        errorMessage="error message"
      />
    </Container>
  );
}
