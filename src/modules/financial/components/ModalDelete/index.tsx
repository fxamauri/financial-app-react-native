import { ModalDeleteProps } from "./types";
import {
  Body,
  Footer,
  DeleteIcon,
  ButtonContainer,
  TextContainer,
  TextTitle,
  TextSubtitle,
} from "./styles";

import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

export default function ModalDelete({
  visible,
  text,
  onClose,
  onClickConfirm,
}: ModalDeleteProps) {
  return (
    <Modal visible={visible}>
      <Body>
        <DeleteIcon name="trash" />
        <TextContainer>
          <TextTitle>Deseja excluir a conta</TextTitle>
          <TextSubtitle>{text}</TextSubtitle>
        </TextContainer>
      </Body>
      <Footer>
        <ButtonContainer>
          <Button variant="outline" title="Não!" onPress={onClose} />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant="danger"
            title="Com certeza"
            onPress={onClickConfirm}
          />
        </ButtonContainer>
      </Footer>
    </Modal>
  );
}
