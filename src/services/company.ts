import { Api } from "../lib/axios";
import { Asset } from "../shared/schemas/asset";
import { Company } from "../shared/schemas/company";
import { Location } from "../shared/schemas/location";

export const CompanyService = {
  getAll: async () => {
    const { data } = await Api.get<Company[]>("/companies");

    return data;
  },

  getAllLocationsByCompanyId: async (companyId: string) => {
    const { data } = await Api.get<Location[]>(
      `/companies/${companyId}/locations`
    );

    return data;
  },

  getAllAssetsByCompanyId: async (companyId: string) => {
    const { data } = await Api.get<Asset[]>(`/companies/${companyId}/assets`);

    return data;
  },
};
