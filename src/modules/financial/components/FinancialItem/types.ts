import { FinancialType } from "../../entities/FinancialRecord";

export type FinancialItemItemProps = {
  code: string;
  title: string;
  type: FinancialType;
  onPress: () => void;
};

export type TitleProps = {
  type: FinancialType;
};
