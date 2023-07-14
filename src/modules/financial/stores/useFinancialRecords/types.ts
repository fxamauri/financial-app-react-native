import { FinancialRecord } from "../../entities/FinancialRecord";

export type State = {
  records: FinancialRecord[];
  add: (record: FinancialRecord) => void;
  remove: (id: FinancialRecord["id"]) => void;
  reset: () => void;
};
