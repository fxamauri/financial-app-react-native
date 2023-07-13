import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
`;
