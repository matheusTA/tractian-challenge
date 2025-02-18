import { create } from "zustand";
import { Company } from "../shared/schemas/company";

interface CompanySeletedState {
  companySelected: Company | null;
  setCompanySelected: (company: Company) => void;
}

export const useComapnySelectedStore = create<CompanySeletedState>()((set) => ({
  companySelected: null,
  setCompanySelected: (company) => set({ companySelected: company }),
}));
