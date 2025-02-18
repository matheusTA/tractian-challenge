import { Building2 } from "lucide-react";
import logo from "../assets/logo.svg";
import { useCompanyQuery } from "../hooks/use-company-query";
import { useComapnySelectedStore } from "../store/company-selected";
import { Button } from "./ui/button";
import { Company } from "../shared/schemas/company";
import { useAssetTreeSelectedStore } from "../store/asset-tree-selected";

export function Header() {
  const { companySelected, setCompanySelected: setCompany } =
    useComapnySelectedStore();
  const { resetAssetTreeSelected } = useAssetTreeSelectedStore();
  const { data } = useCompanyQuery();

  function isSelected(companyId: string) {
    return companySelected?.id === companyId;
  }

  function handleSelectCompany(company: Company) {
    resetAssetTreeSelected();
    setCompany(company);
  }

  return (
    <header className="w-full h-14 flex items-center justify-between p-4 bg-blue-950">
      <img src={logo} alt="" />

      <div className="flex items-center gap-4">
        {data?.map((company) => (
          <Button
            key={company.id}
            variant={isSelected(company.id) ? "selected" : "default"}
            onClick={() => handleSelectCompany(company)}
          >
            <Building2 /> {company.name}
          </Button>
        ))}
      </div>
    </header>
  );
}
