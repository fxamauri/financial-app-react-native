import { ContainerProps } from "./types";
import { SContainer } from "./styles";

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <SContainer>{children}</SContainer>
    </>
  );
}
