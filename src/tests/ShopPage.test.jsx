import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import ShopPage from "../Components/ShopPage/ShopPage";
import { getShopData } from "../Components/get-shop-data";
import { act } from "react-dom/test-utils";

global.fetch = vi.fn(() => {
    return (Promise.resolve({
        ok: true,
        json: () => Promise.resolve("mockData")
    }));
});

vi.mock("../Components/get-shop-data", () => ({getShopData: vi.fn()}));

vi.mock("../Components/ShopItemContainer/ShopItemContainer", () => ({
    default: ({shopData}) => {
        return (
            <div>{shopData}</div>
        )
       
    }
}));

describe('ShopPage', () => {

    it('displays loading message before shop data is fetched', () => {
        render(<ShopPage></ShopPage>);//Problem: ShopPage needs to be rendered here without calling effect
        const loadMessage = screen.getByRole("heading", { name: /loading shop products/i });
        expect(loadMessage).toBeInTheDocument();
    });

    it('displays item container when data is fetched', async () => {
        getShopData.mockImplementationOnce((setData, setLoading, setError) => {
            setData("mockData");
            setLoading(false);
        })

        await act(async () => {
            render(<ShopPage></ShopPage>)
        })
        const shopData = screen.getByText(/mockData/i)
        expect(shopData).toBeInTheDocument();
    })
});