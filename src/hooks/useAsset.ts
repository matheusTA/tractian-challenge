import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Asset } from "../shared/schemas/asset";
import { QUERY_PATHS } from "../shared/constants/query-paths";
import { CompanyService } from "../services/company";

export const useAsset = (
  companyId: string,
  options?: UseQueryOptions<Asset[], Error>
) => {
  return useQuery<Asset[], Error>({
    queryKey: [QUERY_PATHS.GET_ALL_ASSETS_BY_COMPANY_ID, companyId],
    queryFn: () => CompanyService.getAllAssetsByCompanyId(companyId),
    ...options,
  });
};
