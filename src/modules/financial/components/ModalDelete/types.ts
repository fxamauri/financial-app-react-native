import { ModalProps } from "../../../../components/Modal/types";

export type ModalDeleteProps = {
  text: string;
  visible: ModalProps["visible"];
  onClose: () => void;
  onClickConfirm: () => void;
};
