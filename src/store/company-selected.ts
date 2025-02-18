import { create } from "zustand";
import { Company } from "../shared/schemas/company";

interface CompanySeletedState {
  companySelected: Company | null;
  setCompany: (company: Company) => void;
}

export const useComapnySelectedStore = create<CompanySeletedState>()((set) => ({
  companySelected: null,
  setCompany: (company) => set({ companySelected: company }),
}));
