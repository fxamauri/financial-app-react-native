import { Modal as ModalRN } from "react-native";
import { ModalProps } from "./types";
import { ModalContainer, ModalContent } from "./styles";

export default function Modal({ visible, children }: ModalProps) {
  return (
    <ModalRN visible={visible} transparent>
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalRN>
  );
}
