import { StatusBar } from "expo-status-bar";
import AppProviders from "./components/AppProviders";
import Navigation from "./libs/ReactNavigation";

export default function App() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <Navigation />
    </AppProviders>
  );
}
