import { MAX_CODE_NUMBER } from "./constants";
import { FinancialRecord } from "../../entities/FinancialRecord";

/*
    foi criado esses 2 maps pois a primeira versão dessa função
    utilizava 2 finds, um para  validação de aceita lançamentos e
    outro para validar código já existente e isso tinha uma 
    complexidade linear O(n) a implementação dos maps permite que
    faça a busca em complexidade O(1) tempo constante
  */
export const financialRecordsValidations = (
  storedRecords: FinancialRecord[]
) => {
  const recordsById = new Map(
    storedRecords.map((record) => [record.id, record])
  );
  const recordsByCode = new Map(
    storedRecords.map((record) => [record.code, record])
  );

  return {
    add: (newRecord: FinancialRecord) => {
      /*
        O maior código possível é “999” independente do nível que você está.
       */
      const isValid = newRecord.code.split(".").every((part) => {
        const number = Number(part);
        return !isNaN(number) && number >= 1 && number <= MAX_CODE_NUMBER;
      });

      if (!isValid) {
        throw new Error(
          `O código deve ser composto por números entre 1 e ${MAX_CODE_NUMBER} separados por pontos`
        );
      }

      /* 
        A conta que NÃO aceita lançamento pode ser pai de outras contas,
      */
      const newRecordParentId = newRecord.parentId;
      if (newRecordParentId) {
        const parent = recordsById.get(newRecordParentId);
        if (parent?.acceptRelease) {
          throw new Error("A conta que aceita lançamentos não pode ter filhas");
        }
      }

      /*
        Os códigos não podem se repetir
      */
      if (recordsByCode.has(newRecord.code)) {
        throw new Error("O código fornecido já foi cadastrado");
      }
    },
  };
};
