import { FinancialType } from "../../entities/FinancialRecord";

export type FinancialItemItemProps = {
  code: string;
  title: string;
  type: FinancialType;
  onDelete: () => void;
  onPress: () => void;
};

export type TitleProps = {
  type: FinancialType;
};
