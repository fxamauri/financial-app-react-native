import { DetailsRecordItemProps } from "./types";
import { Type, ParentTitle } from "./styles";
import { FinancialType } from "../../entities/FinancialRecord";
import DetailsRecordText from "../DetailsRecordText";

export default function DetailsRecordItem({
  record,
  recordParent,
}: DetailsRecordItemProps) {
  if (!record) {
    return null;
  }

  return (
    <>
      <DetailsRecordText text="Código" value={record.code} />
      <DetailsRecordText text="Nome" value={record.title} />
      <DetailsRecordText
        text="Tipo"
        value={
          <Type type={record.type}>
            {record.type === FinancialType.INCOME ? "Receita" : "Despesa"}
          </Type>
        }
      />
      <DetailsRecordText
        text="Aceita lançamentos"
        value={record.acceptRelease ? "Sim" : "Não"}
      />

      {!!recordParent && (
        <>
          <ParentTitle>Conta pai</ParentTitle>
          <DetailsRecordText text="Nome" value={recordParent.title} />
          <DetailsRecordText text="Código" value={recordParent.code} />
          <DetailsRecordText
            text="Tipo"
            value={
              <Type type={recordParent.type}>
                {recordParent.type === FinancialType.INCOME
                  ? "Receita"
                  : "Despesa"}
              </Type>
            }
          />
          <DetailsRecordText
            text="Aceita lançamentos"
            value={recordParent.acceptRelease ? "Sim" : "Não"}
          />
        </>
      )}
    </>
  );
}
