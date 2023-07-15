import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { selectAcceptReleaseOptions, selectTypeOptions } from "./constants";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Container from "../../../../components/Container";
import Header from "../../components/Header";
import ConfirmButton from "../../components/ConfirmButton";
import ScreenContent from "../../components/ScreenContent";
import { FinancialRecord, FinancialType } from "../../entities/FinancialRecord";
import useFinancial from "../../hooks/useFinancial";
import { buildCodeTitle, suggestNextCode } from "../../utils";

export default function NewFinancialRecordScreen() {
  const { addRecord, records } = useFinancial();
  const selectParentOptions = useMemo(
    () =>
      records.map(({ id, code, title }) => ({
        label: buildCodeTitle({ code, title }),
        value: id,
      })),
    [records]
  );
  const { goBack } = useNavigation();
  const { control, handleSubmit, watch, setValue } = useForm<FinancialRecord>({
    defaultValues: {
      code: "",
      title: "",
      type: FinancialType.INCOME,
      parentId: "",
      acceptRelease: false,
    },
  });

  const parentId = watch("parentId");
  const inputTypeDisabled = parentId !== "";
  useEffect(() => {
    if (parentId) {
      setValue("code", suggestNextCode(records, parentId));

      const parentItem = records.find((record) => record.id === parentId);
      if (parentItem) {
        setValue("type", parentItem.type);
      }
      return;
    }
    setValue("code", "");
  }, [parentId, records, setValue]);

  return (
    <Container>
      <Header
        showBackButton
        title="Inserir Conta"
        backButtonAction={goBack}
        headerRight={<ConfirmButton onPress={handleSubmit(addRecord)} />}
      />
      <ScreenContent>
        <Controller
          control={control}
          name="parentId"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label="Conta pai"
              items={selectParentOptions}
              onValueChange={onChange}
              value={value}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="code"
          rules={{
            required: "O campo código é obrigatório",
          }}
          render={({
            field: { value, onBlur, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              label="Código"
              placeholder="Código da conta"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              ref={ref}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="title"
          rules={{
            required: "O campo nome é obrigatório",
          }}
          render={({
            field: { value, onBlur, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              label="Nome"
              placeholder="Nome da conta"
              autoCapitalize="none"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              ref={ref}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="type"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label="Tipo"
              disabled={inputTypeDisabled}
              placeholder={{}}
              items={selectTypeOptions}
              onValueChange={onChange}
              value={value}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="acceptRelease"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label="Aceita lançamentos"
              placeholder={{}}
              items={selectAcceptReleaseOptions}
              onValueChange={onChange}
              value={value}
              errorMessage={error?.message}
            />
          )}
        />
      </ScreenContent>
    </Container>
  );
}
