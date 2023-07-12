import { InputErrorProps } from "../InputError/types";

export type InputBaseProps = {
  label: string;
  errorMessage?: InputErrorProps["message"];
  children: React.ReactNode;
};
