import { useCallback } from "react";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { financialRecordsValidations } from "./utils";
import useFinancialRecords from "../../stores/useFinancialRecords";
import { FinancialRecord } from "../../entities/FinancialRecord";
import useSearchFinancialRecords from "../useSearchFinancialRecords";

export default function useFinancial() {
  const { navigate } = useNavigation();
  const addRecordStorage = useFinancialRecords((state) => state.add);
  const removeRecord = useFinancialRecords((state) => state.remove);
  const reset = useFinancialRecords((state) => state.reset);
  const recordsStorage = useFinancialRecords((state) => state.records);

  const { filteredResults, setSearchTerm } =
    useSearchFinancialRecords(recordsStorage);

  const recordById = useCallback(
    (id: FinancialRecord["id"] | null) => {
      return recordsStorage.find((record) => record.id === id);
    },
    [recordsStorage]
  );

  console.log({ recordsStorage });

  const addRecord = useCallback(
    (record: FinancialRecord) => {
      const validate = financialRecordsValidations(recordsStorage);

      try {
        validate.add(record);
        // reset();

        const { code, title, type, parentId, acceptRelease } = record;
        addRecordStorage({
          id: String(uuid.v4()),
          code,
          title,
          type,
          parentId,
          acceptRelease,
        });
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "A conta foi salva",
        });
        navigate("Main");
      } catch (error) {
        console.log(error);
      }
    },
    [addRecordStorage, navigate, recordsStorage]
  );

  return {
    addRecord,
    removeRecord,
    recordById,
    setSearchTerm,
    records: filteredResults,
  };
}
