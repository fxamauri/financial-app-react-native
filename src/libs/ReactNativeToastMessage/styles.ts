import styled from "styled-components/native";
import {
  BaseToast,
  ErrorToast as BaseErrorToast,
} from "react-native-toast-message";

export const SuccessToast = styled(BaseToast).attrs(({ theme }) => ({
  text1Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.MEDIUM,
  },
  text1NumberOfLines: 3,
  text2NumberOfLines: 3,
  text2Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
  },
  contentContainerStyle: {
    padding: 5,
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
  text1NumberOfLines: 3,
  text2NumberOfLines: 3,
  text2Style: {
    color: theme.COLORS.GRAY_400,
    fontSize: theme.FONT_SIZE.S,
    fontFamily: theme.FONT_FAMILY.TEXT.REGULAR,
  },
  contentContainerStyle: {
    paddingVertical: 5,
  },
}))`
  border-left-color: ${({ theme }) => theme.COLORS.PINK_50};
`;
