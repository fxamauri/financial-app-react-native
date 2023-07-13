import { FinancialRecord } from "../../financial/entities/FinancialRecord";

export type State = {
  records: FinancialRecord[];
  add: (record: FinancialRecord) => void;
};
