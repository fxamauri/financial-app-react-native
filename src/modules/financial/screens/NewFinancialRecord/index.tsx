import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container } from "./styles";
import Text from "../../../../components/Text";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

export default function NewFinancialRecordScreen() {
  const options = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const { navigate } = useNavigation();
  return (
    <Container>
      <Text
        fontFamily="MEDIUM"
        onPress={() => {
          navigate("NewFinancialRecord");
        }}
      >
        NewFinancialRecord
      </Text>

      <Input
        label="Código"
        placeholder="código da conta aqui"
        keyboardType="numeric"
        errorMessage="error message"
      />
      <Select
        label="Select"
        errorMessage="error select messag"
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    </Container>
  );
}
