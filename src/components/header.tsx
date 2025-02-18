import { Building2 } from "lucide-react";
import logo from "../assets/logo.svg";
import { useCompany } from "../hooks/useCompany";
import { useComapnySelectedStore } from "../store/company-selected";
import { Button } from "./ui/button";

export function Header() {
  const { companySelected, setCompany } = useComapnySelectedStore();
  const { data } = useCompany();

  function isSelected(companyId: string) {
    return companySelected?.id === companyId;
  }

  return (
    <header className="w-full h-14 flex items-center justify-between p-4 bg-blue-950">
      <img src={logo} alt="" />

      <div className="flex items-center gap-4">
        {data?.map((company) => (
          <Button
            key={company.id}
            variant={isSelected(company.id) ? "selected" : "default"}
            onClick={() => setCompany(company)}
          >
            <Building2 /> {company.name}
          </Button>
        ))}
      </div>
    </header>
  );
}
