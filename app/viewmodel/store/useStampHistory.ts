import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";
import { StampHistoryStore } from "@/app/model/historyStamp";


export const useStampHistory = create(
  persist<StampHistoryStore>(
    (set, get) => ({
      historic: [],
      addStamp: (novoSelo) => {
        const filtrado = get()?.historic?.filter((selo) => selo.codigo !== novoSelo.codigo);

        const newHistoric = [novoSelo, ...filtrado].slice(0, 20);

        set({ historic: newHistoric });
      },
      clearHistory: () => set({ historic: [] }),
    }),
    {
      name: "stampHistoric",
      storage: {
        getItem: AsyncStorage.getItem,
        setItem: AsyncStorage.setItem,
        removeItem: AsyncStorage.removeItem,
      },
    }
  )
);
