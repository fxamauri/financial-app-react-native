import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvidersProps } from "./types";
import StyledComponentsProvider from "../../libs/StyledComponents";
import ReactNativeToastMessage from "../../libs/ReactNativeToastMessage";

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <SafeAreaProvider>
      <StyledComponentsProvider>
        {children}
        <ReactNativeToastMessage />
      </StyledComponentsProvider>
    </SafeAreaProvider>
  );
}
