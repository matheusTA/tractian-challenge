import { describe, expect, it, MockedFunction, vi } from "vitest";

import { render, screen, within } from "@testing-library/react";
import { AssetFilterSelect } from "../asset-filter-select";
import { useComapnySelectedStore } from "../../store/company-selected";
import { useAssetFilterStore } from "../../store/asset-filter";

vi.mock("../../store/company-selected");
const useComapnySelectedStoreMock =
  useComapnySelectedStore as unknown as MockedFunction<
    typeof useComapnySelectedStore
  >;

useComapnySelectedStoreMock.mockReturnValue({
  companySelected: {
    name: "Tobias",
  },
});

vi.mock("../../store/asset-filter");
const useAssetFilterStoreMock =
  useAssetFilterStore as unknown as MockedFunction<typeof useAssetFilterStore>;

const mockToggleIsEnergySensorSelected = vi.fn();
const mockToggleIsCriticalSelected = vi.fn();
useAssetFilterStoreMock.mockReturnValue({
  isEnergySensorSelected: false,
  isCriticalSelected: false,
  toggleIsEnergySensorSelected: mockToggleIsEnergySensorSelected,
  toggleIsCriticalSelected: mockToggleIsCriticalSelected,
});

describe("asset filter select component", () => {
  it("should render company name", () => {
    render(<AssetFilterSelect />);

    const container = screen.getByText("Ativos /").closest("span");
    expect(within(container!).getByText("Tobias")).toBeVisible();
  });

  it("should call toggleIsEnergySensorSelected when energy sensor filter is clicked", () => {
    render(<AssetFilterSelect />);

    const button = screen.getByText("Sensor de energia");
    button.click();

    expect(mockToggleIsEnergySensorSelected).toHaveBeenCalled();
  });

  it("should call toggleIsCriticalSelected when critical filter is clicked", () => {
    render(<AssetFilterSelect />);

    const button = screen.getByText("Critico");
    button.click();

    expect(mockToggleIsCriticalSelected).toHaveBeenCalled();
  });
});
