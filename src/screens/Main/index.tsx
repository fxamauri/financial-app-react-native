import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigate("NewAccount");
        }}
      >
        Main
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
