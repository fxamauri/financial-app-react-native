import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderContentList,
  FinancialRecordNumberRows,
  ListContent,
} from "./styles";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ScreenContent from "../../components/ScreenContent";
import FinancialItem from "../../components/FinancialItem";
import SeparatorItemList from "../../components/SeparatorItemList";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";
import SearchInput from "../../components/SearchInput";
import useFinancial from "../../hooks/useFinancial";

export default function MainScreen() {
  const { records, setSearchTerm, removeRecord } = useFinancial();
  const { navigate } = useNavigation();

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
      <SearchInput placeholder="Pesquisar conta" onChangeText={setSearchTerm} />
      <ScreenContent>
        <HeaderContentList>
          <Title>Listagem</Title>
          <FinancialRecordNumberRows>
            {records.length} registros
          </FinancialRecordNumberRows>
        </HeaderContentList>
        <ListContent>
          <FlatList
            data={records}
            ItemSeparatorComponent={SeparatorItemList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FinancialItem
                code={item.code}
                title={item.title}
                type={item.type}
                onDelete={() => {
                  removeRecord(item.id);
                }}
                onPress={() => {
                  console.log(`onpre`);
                  navigate("DetailsFinancialRecord", {
                    id: item.id,
                  });
                }}
              />
            )}
          />
        </ListContent>
      </ScreenContent>
    </Container>
  );
}
