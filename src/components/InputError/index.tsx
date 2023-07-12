import { Message } from "./styles";

import { InputErrorProps } from "./types";

export default function InputError({ message }: InputErrorProps) {
  if (!message) {
    return null;
  }
  return <Message fontFamily="REGULAR">{message}</Message>;
}
