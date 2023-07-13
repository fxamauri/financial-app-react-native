import { FlatList } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderContentList,
  FinancialRecordNumberRows,
  ListContent,
} from "./styles";
import { FinancialRecord, FinancialType } from "../../entities/FinancialRecord";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ScreenContent from "../../components/ScreenContent";
import FinancialItem from "../../components/FinancialItem";
import SeparatorItemList from "../../components/SeparatorItemList";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";
import Input from "../../../../components/Input";
import ButtonIcon from "../../../../components/ButtonIcon";
import { theme } from "../../../../config/theme";
import SearchInput from "../../components/SearchInput";
import ModalDelete from "../../components/ModalDelete";

const financialRecords: FinancialRecord[] = [
  { title: `1 - conta 1`, type: FinancialType.INCOME },
  { title: `2 - conta 2`, type: FinancialType.EXPENSE },
];
export default function MainScreen() {
  const { navigate } = useNavigation();
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);
  return (
    <Container>
      <Header
        title="Plano de Contas"
        headerRight={
          <AddButton
            onPress={() => {
              navigate("NewFinancialRecord");
            }}
          />
        }
      />
      <SearchInput placeholder="Pesquisar conta" />
      <ScreenContent>
        <HeaderContentList>
          <Title>Listagem</Title>
          <FinancialRecordNumberRows>27 registros</FinancialRecordNumberRows>
        </HeaderContentList>
        <ListContent>
          <FlatList
            data={financialRecords}
            ItemSeparatorComponent={SeparatorItemList}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <FinancialItem
                title={item.title}
                type={item.type}
                onPress={() => {
                  setModalDeleteIsVisible((current) => !current);
                }}
              />
            )}
          />
        </ListContent>
      </ScreenContent>
      <ModalDelete
        text="1.1 - Taxa condominal"
        visible={modalDeleteIsVisible}
        onClose={() => setModalDeleteIsVisible(false)}
        onClickConfirm={() => setModalDeleteIsVisible(false)}
      />
    </Container>
  );
}
