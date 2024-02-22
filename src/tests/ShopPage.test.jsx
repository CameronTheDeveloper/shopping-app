import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ShopPage from "../Components/ShopPage/ShopPage";
import { getShopData } from "../Components/get-shop-data";


vi.mock("../Components/get-shop-data");

describe('ShopPage', () => {

    it('displays loading message before shop data is fetched', () => {
        render(<ShopPage></ShopPage>);
        const loadMessage = screen.getByRole("heading", { name: /loading shop products/i });
        expect(loadMessage).toBeInTheDocument();
    });
});