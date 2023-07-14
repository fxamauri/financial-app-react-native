import { useNavigation, useRoute } from "@react-navigation/native";
import Container from "../../../../components/Container";
import Header from "../../components/Header";
import ScreenContent from "../../components/ScreenContent";
import useFinancial from "../../hooks/useFinancial";
import { RootStackScreenProps } from "../../../../routes/types";
import DetailsRecordItem from "../../components/DetailsRecordItem";

export default function DetailsFinancialRecordScreen() {
  const { recordById } = useFinancial();
  const { params } =
    useRoute<RootStackScreenProps<"DetailsFinancialRecord">["route"]>();
  const { goBack } = useNavigation();

  const record = recordById(params.id);
  const recordParent = recordById(record?.parentId ?? null);

  return (
    <Container>
      <Header
        showBackButton
        title="Detalhes da Conta"
        backButtonAction={goBack}
      />
      <ScreenContent>
        <DetailsRecordItem record={record} recordParent={recordParent} />
      </ScreenContent>
    </Container>
  );
}
