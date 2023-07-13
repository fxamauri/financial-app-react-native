import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Rubik_400Regular, Rubik_700Bold } from "@expo-google-fonts/rubik";

export const fontsToImport = {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Rubik_400Regular,
  Rubik_700Bold,
};

export const theme = {
  COLORS: {
    WHITE: "#ffffff",
    PINK_50: "#ff6680",
    GRAY_800: "#3d3d4c",
    GRAY_700: "#777777",
    GRAY_600: "#6A6A6A",
    GRAY_500: "#747474",
    GRAY_400: "#6C6C80",
    GRAY_200: "#a0a0b2",
    GRAY_100: "#c4c4d1",
    GRAY_50: "#f0edf5",
    PURPLE_200: "#622490",
    GREEN_100: "#1ba803",
    ORANGE_50: "#e28856",
  },
  FONT_FAMILY: {
    TEXT: {
      REGULAR: "Roboto_400Regular",
      MEDIUM: "Roboto_500Medium",
      BOLD: "Roboto_700Bold",
    },
    TITLE: {
      REGULAR: "Rubik_400Regular",
      BOLD: "Rubik_700Bold",
    },
  },
  RADII: {
    S: 10,
    M: 16,
    L: 24,
    XXL: 100,
  },
  SPACE: {
    0: 0,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
  },
  FONT_SIZE: {
    S: 15,
    M: 20,
    L: 22,
  },
} as const;
