import { FinancialRecord } from "../../entities/FinancialRecord";

export const financialRecordsValidations = (
  storedRecords: FinancialRecord[]
) => ({
  add: (newRecord: FinancialRecord) => {
    /* 
        A conta que NÃO aceita lançamento pode ser pai de outras contas,
    */
    const newRecordParentId = newRecord.parentId;
    if (newRecordParentId) {
      const parent = storedRecords.find(
        (record) => record.id === newRecordParentId
      );

      if (parent?.acceptRelease) {
        throw new Error("A conta que aceita lançamentos não pode ter filhas");
      }
    }
  },
});
