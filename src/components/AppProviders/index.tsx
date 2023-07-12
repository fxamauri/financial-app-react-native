import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvidersProps } from "./types";

export default function AppProviders({ children }: AppProvidersProps) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
