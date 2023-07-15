import { FinancialRecord } from "../entities/FinancialRecord";

export const buildCodeTitle = ({
  code,
  title,
}: {
  code: string;
  title: string;
}) => `${code} - ${title}`;

const sortByCode = (a: FinancialRecord, b: FinancialRecord) => {
  const aParts = a.code.split(".").map(Number);
  const bParts = b.code.split(".").map(Number);

  const maxLength = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < maxLength; i++) {
    if (aParts[i] === undefined) return -1; // a é mais curto, considerar como menor no sort -1
    if (bParts[i] === undefined) return 1; // b é mais curto, considerar portanto maior no sort 1

    if (aParts[i] < bParts[i]) return -1;
    if (aParts[i] > bParts[i]) return 1;
  }

  return 0; // Os códigos são iguais, são considerados iguais na ordenação
};
export const suggestNextCode = (
  records: FinancialRecord[],
  parentId?: string
): string => {
  const children = records
    .filter((record) => record.parentId === parentId)
    .sort(sortByCode);

  if (children.length) {
    const lastChildCode = children[children.length - 1].code;
    const parts = lastChildCode.split(".");
    const lastNumber = parseInt(parts[parts.length - 1], 10);

    if (lastNumber === 999) {
      const parentCodeParts = parts.slice(0, -2);
      const parentCode = parentCodeParts.join(".");
      const parentRecord = records.find((record) => record.code === parentCode);
      return suggestNextCode(records, parentRecord?.id);
    }

    return [...parts.slice(0, -1), lastNumber + 1].join(".");
  }

  const parent = records.find((record) => record.id === parentId);
  return parent?.code ? `${parent.code}.1` : "";
};
