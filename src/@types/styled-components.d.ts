import "styled-components";
import { theme } from "../config/theme";

type Theme = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
