export enum FinancialType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export type FinancialRecord = {
  id: string;
  title: string;
  type: FinancialType;
  parentId: string;
  acceptRelease: boolean;
};
