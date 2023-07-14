import { memo, useCallback, useState } from "react";
import { Container, Title, DeleteButton } from "./styles";

import { FinancialItemItemProps } from "./types";
import ModalDelete from "../ModalDelete";
import { buildCodeTitle } from "../../utils";

function FinancialItem({
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

  const onpressInternalDelete = useCallback(() => {
    toggleModal();
  }, [toggleModal]);

  const onClickConfirm = useCallback(() => {
    toggleModal();
    onDelete();
  }, [onDelete, toggleModal]);

  return (
    <>
      <Container onPress={onPress}>
        <Title type={type}>{codeTitle}</Title>
        <DeleteButton onPress={onpressInternalDelete} />
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
