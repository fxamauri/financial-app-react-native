import Toast, { BaseToastProps } from "react-native-toast-message";
import { SuccessToast, ErrorToast } from "./styles";

const toastConfig = {
  success: (props: BaseToastProps) => <SuccessToast {...props} />,
  error: (props: BaseToastProps) => <ErrorToast {...props} />,
};
export default function ReactNativeToastMessage() {
  return <Toast position="bottom" config={toastConfig} />;
}
