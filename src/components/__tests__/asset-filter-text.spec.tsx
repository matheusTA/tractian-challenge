import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import { AssetFilterText } from "../asset-filter-text";
import { useAssetFilterStore } from "../../store/asset-filter";

vi.mock("../../store/asset-filter");
const useAssetFilterStoreMock =
  useAssetFilterStore as unknown as MockedFunction<typeof useAssetFilterStore>;

const mockSetFilterText = vi.fn();
useAssetFilterStoreMock.mockReturnValue({
  filterText: "",
  setFilterText: mockSetFilterText,
});

describe("asset filter text component", () => {
  it("should be call setFilterText when write in input", () => {
    render(<AssetFilterText />);

    fireEvent.change(screen.getByPlaceholderText("Buscar Ativo ou Local"), {
      target: { value: "test" },
    });

    expect(mockSetFilterText).toBeCalledWith("test");
  });
});
