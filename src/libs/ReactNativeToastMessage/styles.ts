import styled, { css } from "styled-components/native";
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast as BaseErrorToast,
} from "react-native-toast-message";
import { TextInput } from "react-native";
import { InputVariant } from "./types";

export const SuccessToast = styled(BaseToast).attrs(({ theme }) => ({
  text1Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.MEDIUM,
  },
  text2Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
  },
  contentContainerStyle: {
    padding: 15,
  },
}))`
  border-left-color: ${({ theme }) => theme.COLORS.GREEN_100};
`;

export const ErrorToast = styled(BaseErrorToast).attrs(({ theme }) => ({
  text1Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.MEDIUM,
  },
  text2Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
  },
  contentContainerStyle: {
    padding: 15,
  },
}))`
  border-left-color: ${({ theme }) => theme.COLORS.PINK_50};
`;
