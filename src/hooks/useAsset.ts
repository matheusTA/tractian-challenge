import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Asset } from "../shared/schemas/asset";
import { QUERY_PATHS } from "../shared/constants/query-paths";
import { CompanyService } from "../services/company";
import { useComapnySelectedStore } from "../store/company-selected";

export const useAsset = (options?: UseQueryOptions<Asset[], Error>) => {
  const { companySelected } = useComapnySelectedStore();

  return useQuery<Asset[], Error>({
    queryKey: [QUERY_PATHS.GET_ALL_ASSETS_BY_COMPANY_ID, companySelected?.id],
    queryFn: () =>
      CompanyService.getAllAssetsByCompanyId(companySelected?.id as string),
    enabled: !!companySelected,
    ...options,
  });
};
