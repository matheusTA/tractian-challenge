import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Company } from "../shared/schemas/company";
import { QUERY_PATHS } from "../shared/constants/query-paths";
import { CompanyService } from "../services/company";
import { useComapnySelectedStore } from "../store/company-selected";

export const useCompanyQuery = (
  options?: UseQueryOptions<Company[], Error>
) => {
  const { setCompany } = useComapnySelectedStore();

  return useQuery<Company[], Error>({
    queryKey: [QUERY_PATHS.GET_ALL_COMPANIES],
    queryFn: async () => {
      const companies = await CompanyService.getAll();

      if (companies.length > 0) {
        setCompany(companies[0]);
      }

      return companies;
    },
    ...options,
  });
};
