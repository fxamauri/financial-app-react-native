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
  padding-left: ${({ theme }) => theme.SPACE[8]}px;
`;

export const FinancialRecordNumberRows = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ListContent = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.SPACE[24]}px;
`;
