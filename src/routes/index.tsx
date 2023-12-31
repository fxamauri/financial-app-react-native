import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import MainScreen from "../modules/financial/screens/Main";
import NewFinancialRecord from "../modules/financial/screens/NewFinancialRecord";
import DetailsFinancialRecord from "../modules/financial/screens/DetailsFinancialRecord";

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
      <Stack.Screen
        name="DetailsFinancialRecord"
        component={DetailsFinancialRecord}
      />
    </Stack.Navigator>
  );
}
