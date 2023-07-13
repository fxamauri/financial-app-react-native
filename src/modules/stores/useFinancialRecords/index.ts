import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { State } from "./types";

const useFinancialRecords = create<State>()(
  devtools(
    persist(
      (set) => ({
        records: [],
        add: (record) =>
          set((state) => ({ records: [...state.records, record] })),
        reset: () => set(() => ({ records: [] })),
      }),
      {
        name: `financialapp-financial-records`,
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);

export default useFinancialRecords;
