import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Routes from "../../routes";

export default function ReactNavigationProvider() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Routes />
    </NavigationContainer>
  );
}
