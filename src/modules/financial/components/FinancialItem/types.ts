import { FinancialType } from "../../entities/FinancialRecord";

export type FinancialItemItemProps = {
  id: string;
  code: string;
  title: string;
  type: FinancialType;
  onDelete: (id: string) => void;
  onPress: (id: string) => void;
};

export type TitleProps = {
  type: FinancialType;
};
