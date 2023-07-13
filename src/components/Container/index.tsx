import { ContainerProps } from "./types";
import { SContainer, SafeAreaViewBottom } from "./styles";

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <SContainer>{children}</SContainer>
      <SafeAreaViewBottom />
    </>
  );
}
