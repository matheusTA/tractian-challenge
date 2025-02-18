import { create } from "zustand";

interface AssetFilterState {
  isEnergySensorSelected: boolean;
  isCriticalSelected: boolean;
  filterText: string;
  toggleIsEnergySensorSelected: () => void;
  toggleIsCriticalSelected: () => void;
  setFilterText: (value: string) => void;
}

export const useAssetFilterStore = create<AssetFilterState>()((set) => ({
  isEnergySensorSelected: false,
  isCriticalSelected: false,
  filterText: "",
  toggleIsEnergySensorSelected: () =>
    set((state) => ({ isEnergySensorSelected: !state.isEnergySensorSelected })),
  toggleIsCriticalSelected: () =>
    set((state) => ({ isCriticalSelected: !state.isCriticalSelected })),
  setFilterText: (value) => set({ filterText: value }),
}));
