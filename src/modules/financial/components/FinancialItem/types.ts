import { FinancialType } from "../../entities/FinancialRecord";

export type FinancialItemItemProps = {
  title: string;
  type: FinancialType;
  onPress: () => void;
};

export type TitleProps = {
  type: FinancialType;
};
