import { FinancialRecord, FinancialType } from "../../entities/FinancialRecord";

export type TypeProps = {
  type: FinancialType;
};

export type DetailsRecordItemProps = {
  record?: FinancialRecord;
  recordParent?: FinancialRecord;
};
