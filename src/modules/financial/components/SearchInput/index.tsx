import { TextInput } from "react-native";

import { forwardRef } from "react";

import { Container } from "./styles";
import Input from "../../../../components/Input";
import { InputProps } from "../../../../components/Input/types";
import ButtonIcon from "../../../../components/ButtonIcon";
import { theme } from "../../../../config/theme";

const SearchInput = forwardRef<TextInput, InputProps>(({ ...props }, ref) => {
  return (
    <Container>
      <Input
        variant="pill"
        startAdornment={
          <ButtonIcon name="search" size={24} color={theme.COLORS.GRAY_100} />
        }
        ref={ref}
        {...props}
      />
    </Container>
  );
});

Input.displayName = "SearchInput";

export default SearchInput;
