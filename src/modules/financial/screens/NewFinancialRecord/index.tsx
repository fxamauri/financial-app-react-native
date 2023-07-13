import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import Text from "../../../../components/Text";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Container from "../../../../components/Container";
import Header from "../../components/Header";

import ConfirmButton from "../../components/ConfirmButton";
import ScreenContent from "../../components/ScreenContent";

export default function NewFinancialRecordScreen() {
  const options = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const { navigate, goBack } = useNavigation();
  return (
    <Container>
      <Header
        showBackButton
        title="Inserir Conta"
        backButtonAction={goBack}
        headerRight={<ConfirmButton onPress={() => alert("add")} />}
      />
      <ScreenContent>
        <Select
          label="Conta pai"
          // errorMessage="error select messag"
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        />
        <Input
          label="Código"
          placeholder="código da conta aqui"
          keyboardType="numeric"
          // errorMessage="error message"
        />
        <Input
          label="Nome"
          placeholder="código da conta aqui"
          autoCapitalize="none"
          // errorMessage="error message"
        />
        <Select
          label="Tipo"
          // errorMessage="error select messag"
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        />
        <Select
          label="Aceita lançamentos"
          // errorMessage="error select messag"
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        />
      </ScreenContent>
    </Container>
  );
}
