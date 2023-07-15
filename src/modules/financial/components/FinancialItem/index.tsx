import { memo, useCallback, useState } from "react";
import { Container, Title, DeleteButton } from "./styles";

import { FinancialItemItemProps } from "./types";
import ModalDelete from "../ModalDelete";
import { buildCodeTitle } from "../../utils";

function FinancialItem({
  id,
  code,
  title,
  type,
  onDelete,
  onPress,
}: FinancialItemItemProps) {
  const codeTitle = buildCodeTitle({ code, title });
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setModalDeleteIsVisible((current) => !current);
  }, []);

  const onPressInternal = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  const onPressInternalDelete = useCallback(() => {
    toggleModal();
  }, [toggleModal]);

  const onClickConfirm = useCallback(() => {
    toggleModal();
    onDelete(id);
  }, [id, onDelete, toggleModal]);

  return (
    <>
      <Container onPress={onPressInternal}>
        <Title type={type}>{codeTitle}</Title>
        <DeleteButton onPress={onPressInternalDelete} />
      </Container>
      <ModalDelete
        text={codeTitle}
        visible={modalDeleteIsVisible}
        onClose={toggleModal}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
}

export default memo(FinancialItem);
