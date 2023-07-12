import { ThemeProvider } from "styled-components";
import { StyledComponentsProviderProps } from "./types";
import { theme } from "../../config/theme";

export default function StyledComponentsProvider({
  children,
}: StyledComponentsProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
