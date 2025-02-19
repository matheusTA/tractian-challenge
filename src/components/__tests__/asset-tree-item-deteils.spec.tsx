import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, MockedFunction, vi } from "vitest";
import { AssetTreeItemDeteils } from "../asset-tree-item-details";
import { useAssetTreeSelectedStore } from "../../store/asset-tree-selected";

vi.mock("../../store/asset-tree-selected");
const useAssetTreeSelectedStoreMock =
  useAssetTreeSelectedStore as unknown as MockedFunction<
    typeof useAssetTreeSelectedStore
  >;

describe("asset tree item details component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should be render empty message when assetTreeSelected not exist", () => {
    useAssetTreeSelectedStoreMock.mockReturnValue({
      assetTreeSelected: null,
    });

    render(<AssetTreeItemDeteils />);

    const emptyMessage = screen.getByText(
      "Selecione um componente para visualizar os detalhes"
    );

    expect(emptyMessage).toBeInTheDocument();
  });

  it("should be render asset tree details when assetTreeSelected exist", () => {
    useAssetTreeSelectedStoreMock.mockReturnValue({
      assetTreeSelected: {
        name: "Test",
        sensorType: "energy",
        gatewayId: "123",
      },
    });

    render(<AssetTreeItemDeteils />);

    const assetTreeName = screen.getByText("Test");
    const assetTreeGatewayId = screen.getByText("123");
    const assetTreeSensorType = screen.getByText("energy");

    expect(assetTreeName).toBeInTheDocument();
    expect(assetTreeGatewayId).toBeInTheDocument();
    expect(assetTreeSensorType).toBeInTheDocument();
  });
});
