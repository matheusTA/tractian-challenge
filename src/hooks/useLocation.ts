import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Location } from "../shared/schemas/location";
import { QUERY_PATHS } from "../shared/constants/query-paths";
import { CompanyService } from "../services/company";

export const useLocation = (
  companyId: string,
  options?: UseQueryOptions<Location[], Error>
) => {
  return useQuery<Location[], Error>({
    queryKey: [QUERY_PATHS.GET_ALL_LOCATIONS_BY_COMPANY_ID, companyId],
    queryFn: () => CompanyService.getAllLocationsByCompanyId(companyId),
    ...options,
  });
};
