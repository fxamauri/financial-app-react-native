import { useMemo, useState } from "react";
import { FinancialRecord } from "../../entities/FinancialRecord";
import { useDebounce } from "../../../../hooks/useDebounce";

export default function useSearchFinancialRecords(records: FinancialRecord[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredResults = useMemo(() => {
    if (debouncedSearchTerm === "") {
      return records;
    }
    return records.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, records]);

  return {
    setSearchTerm,
    filteredResults,
  };
}
