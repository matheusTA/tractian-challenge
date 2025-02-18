import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Location } from "../shared/schemas/location";
import { QUERY_PATHS } from "../shared/constants/query-paths";
import { CompanyService } from "../services/company";
import { useComapnySelectedStore } from "../store/company-selected";

export const useLocation = (options?: UseQueryOptions<Location[], Error>) => {
  const { companySelected } = useComapnySelectedStore();

  return useQuery<Location[], Error>({
    queryKey: [
      QUERY_PATHS.GET_ALL_LOCATIONS_BY_COMPANY_ID,
      companySelected?.id,
    ],
    queryFn: () =>
      CompanyService.getAllLocationsByCompanyId(companySelected?.id as string),
    enabled: !!companySelected,
    ...options,
  });
};
