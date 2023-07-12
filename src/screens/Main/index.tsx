import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import Text from "../../components/Text";

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
    </Container>
  );
}
