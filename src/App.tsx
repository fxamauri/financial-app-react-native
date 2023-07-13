import { StatusBar } from "expo-status-bar";
import useCachedResources from "./hooks/useCachedResources";

import AppProviders from "./components/AppProviders";
import Navigation from "./libs/ReactNavigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <AppProviders>
      <StatusBar style="light" />
      <Navigation />
    </AppProviders>
  );
}
