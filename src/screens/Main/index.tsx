import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Container } from "./styles";

export default function MainScreen() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Text
        onPress={() => {
          navigate("NewAccount");
        }}
      >
        Main
      </Text>
    </Container>
  );
}
