import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { StampHistoryStore } from "@/app/model/historyStamp";


export const useStampHistory = create(
  persist<StampHistoryStore>(
    (set, get) => ({
      historic: [],
      addStamp: (newStamp) => {
        const filtrado = get()?.historic?.filter((selo) => selo.codigo !== newStamp.codigo);

        const newHistoric = [newStamp, ...filtrado].slice(0, 20);

        set({ historic: newHistoric });
      },
      clearHistory: () => set({ historic: [] }),
    }),
    {
      name: "stampHistoric",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
