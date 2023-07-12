export enum FinancialType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export type FinancialRecord = {
  title: string;
  type: FinancialType;
};
