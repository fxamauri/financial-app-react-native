import { FinancialType } from "../../entities/FinancialRecord";

export const selectTypeOptions = [
  { label: "Receita", value: FinancialType.INCOME },
  { label: "Despesa", value: FinancialType.EXPENSE },
];

export const selectAcceptReleaseOptions = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

selectTypeOptions;
