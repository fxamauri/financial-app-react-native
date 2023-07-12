import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import MainScreen from "../screens/Main";
import NewFinancialRecord from "../screens/NewFinancialRecord";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="NewFinancialRecord" component={NewFinancialRecord} />
    </Stack.Navigator>
  );
}
