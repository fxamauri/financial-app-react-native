import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
`;

export const HeaderContentList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccountNumberRows = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
