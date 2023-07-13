export enum FinancialType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export type FinancialRecord = {
  id: string;
  code: string;
  title: string;
  type: FinancialType;
  parentId: string | null;
  acceptRelease: boolean;
};
