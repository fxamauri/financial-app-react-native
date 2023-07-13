import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
`;

export const SafeAreaViewBottom = styled(SafeAreaView)`
  flex: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
`;
